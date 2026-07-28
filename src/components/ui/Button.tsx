'use client';

import type { ReactNode, MouseEventHandler } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  'aria-label'?: string;
}

const base =
  'inline-flex items-center cursor-pointer justify-center text-center rounded-full px-8 py-3.5 ' +
  'font-roboto-condensed font-bold text-sm uppercase tracking-widest ' +
  'transition-colors duration-200 select-none';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-black text-white hover:bg-secondary-light',
};

const disabledStyles = 'bg-disabled text-white cursor-not-allowed';

export function Button({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  fullWidth = true,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = [
    base,
    fullWidth ? 'w-full' : 'w-auto',
    disabled ? disabledStyles : variantStyles[variant],
    className,
  ].join(' ');

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
}
