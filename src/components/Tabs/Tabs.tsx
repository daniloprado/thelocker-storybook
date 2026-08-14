import { createContext, useContext, type ReactNode } from 'react';
import { Chip } from '../Chip/Chip';
import './Tabs.css';

export type TabsSize = 'default' | 'small';
export type TabsOrientation = 'horizontal' | 'vertical';
export type TabsStyle = 'standard' | 'pill';

export interface TabItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  /** Optional trailing content (Figma: Icon button on default Standard active tabs). Ignored for pill style. */
  trailing?: ReactNode;
  className?: string;
}

export interface TabsProps {
  size?: TabsSize;
  orientation?: TabsOrientation;
  tabStyle?: TabsStyle;
  children: ReactNode;
  className?: string;
}

type TabsContextValue = {
  size: TabsSize;
  tabStyle: TabsStyle;
};

const TabsContext = createContext<TabsContextValue>({
  size: 'default',
  tabStyle: 'standard'
});

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

function TabItem({ label, active = false, onClick, trailing, className }: TabItemProps) {
  const { size, tabStyle } = useContext(TabsContext);
  const isPill = tabStyle === 'pill';
  const chipSize = size === 'small' ? 'small' : 'medium';

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={cx('tabs__item', isPill && 'tabs__item--pill', active && 'tabs__item--active', className)}
      onClick={onClick}
    >
      {isPill ? (
        <Chip label={label} size={chipSize} color={active ? 'whiteStrong' : 'neutral'} />
      ) : (
        <>
          <span className="tabs__label">{label}</span>
          {trailing}
        </>
      )}
    </button>
  );
}

function TabsRoot({
  size = 'default',
  orientation = 'horizontal',
  tabStyle = 'standard',
  children,
  className
}: TabsProps) {
  return (
    <TabsContext.Provider value={{ size, tabStyle }}>
      <div
        role="tablist"
        aria-orientation={orientation}
        className={cx('tabs', `tabs--${orientation}`, `tabs--${size}`, `tabs--${tabStyle}`, className)}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export const Tabs = Object.assign(TabsRoot, { Item: TabItem });
