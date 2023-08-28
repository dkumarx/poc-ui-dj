import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import styles from 'rollup-plugin-styles';
// import copy from 'rollup-plugin-copy';
// import visualizer from 'rollup-plugin-visualizer';

import packageJson from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: `dist/${packageJson.main}`,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: `dist/${packageJson.module}`,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [peerDepsExternal(), resolve(), commonjs(), styles(), typescript({ tsconfig: './tsconfig.json' })]
};
