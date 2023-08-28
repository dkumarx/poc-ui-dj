import MUIButton, { ButtonProps } from '@mui/material/Button';

declare module '@mui/material/Button' {
  export interface ButtonPropsSizeOverrides {
    slim: true;
  }
}

const getDefaultColor = ({ color, variant }: ButtonProps) => {
  if (variant === 'outlined') {
    return color || 'secondary';
  }

  return 'primary';
};

const Button = (props: ButtonProps): JSX.Element => {
  const {
    variant = 'contained',
    color = getDefaultColor(props),

    ...buttonProps
  } = props;

  return <MUIButton variant={variant} color={color} {...buttonProps} />;
};

export default Button;
