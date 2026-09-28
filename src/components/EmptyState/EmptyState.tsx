import type { HTMLAttributes, ReactNode } from 'react';
import { FancyIcon } from '../Icon/FancyIcon';
import { Button } from '../Button/Button';
import './EmptyState.css';

export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Figma Heading text. */
  heading?: ReactNode;
  /** Figma Body text. */
  description?: ReactNode;
  /** Figma Show icon. */
  showIcon?: boolean;
  /** Figma Show heading. */
  showHeading?: boolean;
  /** Figma Show description. */
  showDescription?: boolean;
  /** Figma "Shot button" (Show button). */
  showButton?: boolean;
  /** Font Awesome code for the Fancy Icon (Figma default: user). */
  iconCode?: string;
  /** Overrides the default Fancy Icon. */
  icon?: ReactNode;
  /** Label for the default Primary/Text Button. */
  buttonLabel?: ReactNode;
  onButtonClick?: () => void;
  /** Overrides the default Button. */
  action?: ReactNode;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function EmptyState({
  heading = 'No data',
  description = 'Your data will appear here',
  showIcon = true,
  showHeading = true,
  showDescription = true,
  showButton = true,
  iconCode = 'user',
  icon,
  buttonLabel = 'Add item',
  onButtonClick,
  action,
  className,
  ...rest
}: EmptyStateProps) {
  return (
    <div {...rest} className={cx('empty-state', className)} role="status">
      {showIcon ? (
        <div className="empty-state__icon">
          {icon ?? <FancyIcon faCode={iconCode} size="large" color="neutral" />}
        </div>
      ) : null}
      {showHeading ? <p className="empty-state__heading">{heading}</p> : null}
      {showDescription ? <p className="empty-state__description">{description}</p> : null}
      {showButton ? (
        <div className="empty-state__action">
          {action ?? (
            <Button
              variant="primary"
              appearance="text"
              size="large"
              leadingIcon
              leadingIconCode="plus"
              label={buttonLabel}
              onClick={onButtonClick}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}
