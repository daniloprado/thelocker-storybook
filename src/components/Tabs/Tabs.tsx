import type { ReactNode } from 'react';
import './Tabs.css';

export type TabsSize = 'default' | 'small';
export type TabsOrientation = 'horizontal' | 'vertical';

export interface TabItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface TabsProps {
  size?: TabsSize;
  orientation?: TabsOrientation;
  children: ReactNode;
  className?: string;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

function TabItem({ label, active = false, onClick, className }: TabItemProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={cx('tabs__item', active && 'tabs__item--active', className)}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function TabsRoot({ size = 'default', orientation = 'horizontal', children, className }: TabsProps) {
  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      className={cx('tabs', `tabs--${orientation}`, `tabs--${size}`, className)}
    >
      {children}
    </div>
  );
}

export const Tabs = Object.assign(TabsRoot, { Item: TabItem });
