import type { ReactNode } from 'react';
import './List.css';

export interface ListItemProps {
  label: string;
  secondaryText?: string;
  avatar?: string;
  showArrow?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface ListProps {
  children: ReactNode;
  className?: string;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

function ListItem({ label, secondaryText, avatar, showArrow, onClick, className }: ListItemProps) {
  const Tag = onClick ? 'button' : 'div';
  const hasAvatar = Boolean(avatar);

  return (
    <Tag
      type={onClick ? 'button' : undefined}
      className={cx(
        'list__item',
        hasAvatar && 'list__item--with-avatar',
        onClick && 'list__item--clickable',
        className
      )}
      onClick={onClick}
    >
      {hasAvatar && (
        <span className="list__item-avatar">
          {avatar && <img src={avatar} alt="" />}
        </span>
      )}

      <span className="list__item-content">
        <span className="list__item-label">{label}</span>
        {secondaryText && <span className="list__item-secondary">{secondaryText}</span>}
      </span>

      {showArrow && (
        <span className="list__item-arrow" aria-hidden="true">›</span>
      )}
    </Tag>
  );
}

function ListRoot({ children, className }: ListProps) {
  return (
    <div className={cx('list', className)}>
      {children}
    </div>
  );
}

export const List = Object.assign(ListRoot, { Item: ListItem });
