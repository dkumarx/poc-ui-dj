import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

interface Props extends Omit<TypographyProps, 'variant'> {
  /** The name of the HTML element to be used as the root node. */
  component?: string;
}

const H2: React.FC<Props> = ({ children, ...props }: Props): JSX.Element => (
  <Typography {...props} variant="h2">
    {children}
  </Typography>
);

export default H2;
