import { classes } from '@utils/classes';

type ButtonVariant = 'warning' | 'danger' | 'info';

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  variant?: ButtonVariant;
}

function Button({ children, variant }: Props) {
  let cssClasses = '';
  switch (variant) {
    case 'danger':
      cssClasses = classes('button', '_danger');
      break;
    case 'warning':
      cssClasses = classes('button', '_warning');
      break;
    case 'info':
      cssClasses = classes('button', '_info');
      break;
    default:
      cssClasses = 'button';
      break;
  }

  return <button className={cssClasses}>{children}</button>;
}

export default Button;
