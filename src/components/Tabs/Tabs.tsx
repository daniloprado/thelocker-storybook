import { createContext, useContext, type ReactNode } from 'react';
import { Chip } from '../Chip/Chip';
import type { ChipSize } from '../Chip/Chip';
import './Tabs.css';

/**
 * Figma Tab Item / Tab Group **Size**.
 * Standard style exists in Figma as Default and Small; Large falls back to Default metrics.
 * Pill style maps Small → Chip Small, Default → Chip Medium, Large → Chip Large.
 */
export type TabsSize = 'small' | 'default' | 'large';
export type TabsOrientation = 'horizontal' | 'vertical';
/** Figma **Style**: Standard (Figma "Default") or Pill. */
export type TabsStyle = 'standard' | 'pill';

export interface TabItemProps {
  label: string;
  /** Figma State=Active. */
  active?: boolean;
  onClick?: () => void;
  /** Optional trailing content (Figma: Icon button on Standard active tabs). Ignored for pill style. */
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

const PILL_CHIP_SIZE: Record<TabsSize, ChipSize> = {
  small: 'small',
  default: 'medium',
  large: 'large'
};

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

function TabItem({ label, active = false, onClick, trailing, className }: TabItemProps) {
  const { size, tabStyle } = useContext(TabsContext);
  const isPill = tabStyle === 'pill';

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={cx('tabs__item', isPill && 'tabs__item--pill', active && 'tabs__item--active', className)}
      onClick={onClick}
    >
      {isPill ? (
        <Chip label={label} size={PILL_CHIP_SIZE[size]} color={active ? 'whiteStrong' : 'neutral'} />
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
