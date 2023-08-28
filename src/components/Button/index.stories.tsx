import Button from './';

import { ComponentMeta } from '@storybook/react';

const meta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button
};

export default meta;

export const Usage = (): JSX.Element => {
  return (
    <>
      <p>
        <Button>Button</Button>
      </p>

      <p>
        <Button color="secondary">Button</Button>
      </p>

      <p>
        <Button variant="outlined">Button</Button>
      </p>

      <p>
        <Button variant="outlined" disabled>
          Button
        </Button>
      </p>

      <p>
        <Button size="slim">Button</Button>
      </p>

      <p>
        <Button variant="outlined" size="slim">
          Button
        </Button>
      </p>
    </>
  );
};
