import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import type { IconStyle } from '../Icon/Icon';
import './Sidenav.css';

export type SidenavLayout = 'full' | 'mini';
export type SidenavNavItemState = 'default' | 'hover' | 'active';

export interface SidenavProps extends HTMLAttributes<HTMLElement> {
  layout?: SidenavLayout;
}

export interface SidenavMainProps extends HTMLAttributes<HTMLElement> {
  title?: string;
}

export interface SidenavNavItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label?: string;
  state?: SidenavNavItemState;
  icon?: ReactNode;
  faCode?: string;
  faStyle?: IconStyle;
  /** @deprecated Use faCode */
  iconCode?: string;
  /** @deprecated Use faStyle */
  iconStyle?: IconStyle;
  arrow?: boolean;
  showLabel?: boolean;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

function SidenavRoot({
  layout = 'full',
  className,
  children,
  ...rest
}: SidenavProps) {
  return (
    <aside
      {...rest}
      className={cx('sidenav', `sidenav--${layout}`, className)}
    >
      {children}
    </aside>
  );
}

function SidenavMain({
  title = 'Main',
  className,
  children,
  ...rest
}: SidenavMainProps) {
  return (
    <section
      {...rest}
      className={cx('sidenav-main', className)}
    >
      <p className="sidenav-main__title">{title}</p>
      <div className="sidenav-main__items">{children}</div>
    </section>
  );
}

function SidenavNavItem({
  label = 'Clients',
  state = 'default',
  icon,
  faCode,
  faStyle = 'regular',
  iconCode,
  iconStyle,
  arrow = false,
  showLabel = true,
  disabled,
  className,
  type = 'button',
  ...rest
}: SidenavNavItemProps) {
  const isInteractive = state === 'default' && !disabled;
  const resolvedCode = faCode ?? iconCode ?? 'users';
  const resolvedStyle = faStyle ?? iconStyle ?? 'regular';

  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      className={cx(
        'sidenav-nav-item',
        `sidenav-nav-item--${state}`,
        !showLabel && 'sidenav-nav-item--icon-only',
        isInteractive && 'sidenav-nav-item--interactive',
        className
      )}
    >
      <span className="sidenav-nav-item__icon" aria-hidden="true">
        {icon ?? <Icon fa-code={resolvedCode} fa-style={resolvedStyle} size="small" />}
      </span>

      {showLabel ? (
        <span className="sidenav-nav-item__label">{label}</span>
      ) : (
        <span className="sidenav-nav-item__sr-only">{label}</span>
      )}

      {arrow ? (
        <span className="sidenav-nav-item__arrow" aria-hidden="true">
          <Icon fa-code="chevron-right" size="xsmall" />
        </span>
      ) : null}
    </button>
  );
}

type SidenavComponent = typeof SidenavRoot & {
  Main: typeof SidenavMain;
  NavItem: typeof SidenavNavItem;
};

export const Sidenav = Object.assign(SidenavRoot, {
  Main: SidenavMain,
  NavItem: SidenavNavItem
}) as SidenavComponent;
