import type { HTMLAttributes, ReactNode } from 'react';
import { MenuItem } from '../MenuItem/MenuItem';
import './MenuGroup.css';

export interface MenuGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface MenuGroupHeadingProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

function MenuGroupRoot({ className, children, ...rest }: MenuGroupProps) {
  return (
    <div {...rest} className={cx('menu-group', className)}>
      {children}
    </div>
  );
}

function MenuGroupHeading({
  heading = 'Sub-heading',
  className,
  ...rest
}: MenuGroupHeadingProps) {
  return (
    <div {...rest} className={cx('menu-group-heading', className)}>
      <div className="menu-group-heading__divider" />
      <div className="menu-group-heading__content">
        <p className="menu-group-heading__text">{heading}</p>
      </div>
    </div>
  );
}

type MenuGroupComponent = typeof MenuGroupRoot & {
  Heading: typeof MenuGroupHeading;
  Item: typeof MenuItem;
};

export const MenuGroup = Object.assign(MenuGroupRoot, {
  Heading: MenuGroupHeading,
  Item: MenuItem
}) as MenuGroupComponent;
