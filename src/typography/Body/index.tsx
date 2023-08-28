import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

interface Props extends Omit<TypographyProps, 'variant'> {
  /** The body typography variant to be rendered. */
  variant?: 'body1' | 'body2';

  /** The name of the HTML element to be used as the root node. */
  component?: string;
}

const Body: React.FC<Props> = ({ children, ...props }: Props): JSX.Element => (
  // Use the body1 variant by default, but allow it to be overridden by props.
  <Typography {...props}>{children}</Typography>
);

Body.defaultProps = {
  variant: 'body1'
};

export default Body;
