import type { HTMLAttributes } from 'react';
import { Icon } from '../Icon/Icon';
import './DropArea.css';

export type DropAreaState = 'default' | 'active';

export interface DropAreaProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  showDescription?: boolean;
  state?: DropAreaState;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function DropArea({
  label = 'Drag and drop your items here',
  description = 'or drag questions from the left',
  showDescription = true,
  state = 'default',
  className,
  ...rest
}: DropAreaProps) {
  return (
    <div
      {...rest}
      className={cx('drop-area', `drop-area--${state}`, className)}
      role="status"
      aria-live="polite"
    >
      <div className="drop-area__label-row">
        <Icon className="drop-area__icon" fa-code="arrow-down-to-bracket" fa-style="regular" size="small" />
        <p className="drop-area__label">{label}</p>
      </div>

      {showDescription ? <p className="drop-area__description">{description}</p> : null}
    </div>
  );
}
