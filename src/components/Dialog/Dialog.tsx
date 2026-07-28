import type { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import './Dialog.css';

export type DialogVariant = 'scroll' | 'simple';

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  variant?: DialogVariant;
  open?: boolean;
  showOverlay?: boolean;
  onClose?: () => void;
  footer?: ReactNode;
  headingLeft?: ReactNode;
  headingRight?: ReactNode;
  width?: number | string;
}

export function Dialog({
  title = 'Heading',
  variant = 'scroll',
  open = true,
  showOverlay = false,
  onClose,
  footer,
  headingLeft,
  headingRight,
  width,
  children,
  className,
  style,
  ...rest
}: DialogProps) {
  if (!open) return null;

  const dialogStyle: React.CSSProperties = {
    ...style,
    ...(width ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
  };

  const dialog = (
    <div
      {...rest}
      className={[
        'dialog',
        `dialog--${variant}`,
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      role="dialog"
      aria-modal={showOverlay}
      aria-label={typeof title === 'string' ? title : undefined}
      style={dialogStyle}
    >
      <div className="dialog__header">
        <div className="dialog__header-left">
          <span className="dialog__title">{title}</span>
          {headingLeft ? (
            <span className="dialog__heading-slot">{headingLeft}</span>
          ) : null}
        </div>
        <div className="dialog__header-right">
          {headingRight ? (
            <span className="dialog__heading-slot">{headingRight}</span>
          ) : null}
          <button
            type="button"
            className="dialog__close"
            aria-label="Close dialog"
            onClick={onClose}
          >
            <Icon faCode="xmark" faStyle="light" size="small" />
          </button>
        </div>
      </div>

      <div className="dialog__body">{children}</div>

      {footer ? <div className="dialog__footer">{footer}</div> : null}
    </div>
  );

  if (!showOverlay) return dialog;

  return (
    <div className="dialog-overlay" onClick={onClose} role="presentation">
      <div onClick={(e) => e.stopPropagation()} role="presentation">
        {dialog}
      </div>
    </div>
  );
}
