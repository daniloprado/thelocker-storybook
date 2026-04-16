import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export type ButtonVariant = 'filled' | 'outline' | 'text';
export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonState = 'default' | 'hover' | 'active' | 'focus' | 'disabled';
export type ButtonAction = 'regular' | 'destructive';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  action?: ButtonAction;
}

export function Button({
  label = 'Label',
  variant = 'filled',
  size = 'medium',
  state = 'default',
  action = 'regular',
  className,
  type = 'button',
  disabled = false,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState: ButtonState = isDisabled ? 'disabled' : state;
  const isInteractive = resolvedState === 'default';

  const buttonClassName = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    `button--${resolvedState}`,
    `button--${action}`,
    isInteractive ? 'button--interactive' : '',
    className ?? ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      {...rest}
      type={type}
      className={buttonClassName}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
}
