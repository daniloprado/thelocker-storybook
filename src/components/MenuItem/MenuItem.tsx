import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import type { IconStyle } from '../Icon/Icon';
import './MenuItem.css';

export type MenuItemState = 'default' | 'hover' | 'selected' | 'disabled' | 'critical';

export interface MenuItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label?: string;
  state?: MenuItemState;
  showLeadingIcon?: boolean;
  leadingIconCode?: string;
  leadingIconStyle?: IconStyle;
  trailingIcon?: ReactNode;
  children?: ReactNode;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function MenuItem({
  label = 'Menu item',
  state = 'default',
  showLeadingIcon = false,
  leadingIconCode = 'arrow-right',
  leadingIconStyle = 'solid',
  trailingIcon,
  children,
  className,
  disabled,
  type = 'button',
  ...rest
}: MenuItemProps) {
  const isSelected = state === 'selected';
  const isDisabled = state === 'disabled' || Boolean(disabled);
  const isInteractive = state === 'default';

  return (
    <button
      {...rest}
      type={type}
      disabled={isDisabled}
      className={cx(
        'menu-item',
        `menu-item--${state}`,
        isInteractive && 'menu-item--interactive',
        className
      )}
    >
      {showLeadingIcon ? (
        <span className="menu-item__leading-icon" aria-hidden="true">
          <Icon fa-code={leadingIconCode} fa-style={leadingIconStyle} size="small" />
        </span>
      ) : null}

      <span className="menu-item__label">{children ?? label}</span>

      {isSelected ? (
        <span className="menu-item__trailing-icon" aria-hidden="true">
          {trailingIcon ?? <Icon fa-code="check" fa-style="solid" size="small" />}
        </span>
      ) : null}
    </button>
  );
}
