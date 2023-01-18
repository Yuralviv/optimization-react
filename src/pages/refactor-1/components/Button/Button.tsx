import clsx from 'clsx';

import { ButtonProps } from './Button.interface';

export const Button: React.FC<ButtonProps> = ({ title, isSelectedButton, ...buttonProps }) => (
  <button
    key={title}
    className={clsx(
      'h-10 px-5 flex items-center justify-center rounded transition-colors',
      isSelectedButton ? 'bg-green-400' : 'bg-gray-300',
    )}
    {...buttonProps}
  >
    {title}
  </button>
);