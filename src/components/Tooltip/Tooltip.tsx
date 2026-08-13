import type { ReactNode } from 'react';
import './Tooltip.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  text: string;
  position?: TooltipPosition;
  children: ReactNode;
  className?: string;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function Tooltip({ text, position = 'top', children, className }: TooltipProps) {
  return (
    <span className={cx('tooltip', `tooltip--${position}`, className)}>
      <span className="tooltip__trigger">{children}</span>
      <span className="tooltip__content" role="tooltip">{text}</span>
    </span>
  );
}
