import type { ReactNode } from 'react';
import './Widget.css';

export interface WidgetProps {
  title?: string;
  headerRight?: ReactNode;
  children?: ReactNode;
  className?: string;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function Widget({ title = 'Heading', headerRight, children, className }: WidgetProps) {
  return (
    <div className={cx('widget', className)}>
      <div className="widget__header">
        <h3 className="widget__title">{title}</h3>
        {headerRight && <div className="widget__header-right">{headerRight}</div>}
      </div>
      {children && <div className="widget__body">{children}</div>}
    </div>
  );
}
