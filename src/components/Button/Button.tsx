import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import type { IconSize } from '../Icon/Icon';
import './Button.css';

/** Figma **Style**. */
export type ButtonVariant = 'primary' | 'secondary' | 'neutral' | 'destructive';
/** Figma **Type**. */
export type ButtonAppearance = 'filled' | 'outline' | 'text' | 'ghost';
export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonState = 'default' | 'hover' | 'active' | 'focus' | 'disabled';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Figma Label text property. */
  label?: ReactNode;
  /** Figma Style: Primary (blue), Secondary (yellow), Neutral, Destructive. */
  variant?: ButtonVariant;
  /** Figma Type: Filled, Outline, Text, Ghost. */
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  /** Forces a visual state. Interactive states still apply when `default`. */
  state?: ButtonState;
  /** Figma Leading Icon boolean. */
  leadingIcon?: boolean;
  /** Figma Trailing Icon boolean. */
  trailingIcon?: boolean;
  /** Font Awesome code for the leading icon (Figma nested Icon → Icon code). */
  leadingIconCode?: string;
  /** Font Awesome code for the trailing icon (Figma nested Icon → Icon code). */
  trailingIconCode?: string;
  /** Custom leading slot. Overrides `leadingIconCode` when provided. */
  leading?: ReactNode;
  /** Custom trailing slot. Overrides `trailingIconCode` when provided. */
  trailing?: ReactNode;
}

const ICON_SIZE: Record<ButtonSize, IconSize> = {
  large: 'small',
  medium: 'small',
  small: 'xsmall'
};

export function Button({
  label = 'Label',
  variant = 'secondary',
  appearance = 'filled',
  size = 'large',
  state = 'default',
  leadingIcon = false,
  trailingIcon = false,
  leadingIconCode = 'plus',
  trailingIconCode = 'plus',
  leading,
  trailing,
  className,
  type = 'button',
  disabled = false,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || state === 'disabled';
  const resolvedState: ButtonState = isDisabled ? 'disabled' : state;
  const isInteractive = resolvedState === 'default';
  const iconSize = ICON_SIZE[size];

  const buttonClassName = [
    'button',
    `button--${variant}`,
    `button--${appearance}`,
    `button--${size}`,
    `button--${resolvedState}`,
    isInteractive ? 'button--interactive' : '',
    className ?? ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button {...rest} type={type} className={buttonClassName} disabled={isDisabled}>
      {leadingIcon ? (
        <span className="button__icon button__icon--leading">
          {leading ?? <Icon faCode={leadingIconCode} size={iconSize} />}
        </span>
      ) : null}
      <span className="button__label">{label}</span>
      {trailingIcon ? (
        <span className="button__icon button__icon--trailing">
          {trailing ?? <Icon faCode={trailingIconCode} size={iconSize} />}
        </span>
      ) : null}
    </button>
  );
}
