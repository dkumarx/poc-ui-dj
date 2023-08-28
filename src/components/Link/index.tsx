import React from 'react';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';

export type LinkProps = MuiLinkProps;

/*
At present Link is only customised via the POC UI theme. However, simply
re-exporting the MUI component causes storybook to fail to generate an args
table (props table). Implementing a simple wrapper component seems to work
around this.
*/
const Link: React.FC<LinkProps> = (props) => <MuiLink {...props} />;

export default Link;
