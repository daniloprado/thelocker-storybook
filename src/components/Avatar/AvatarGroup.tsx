import type { ReactNode } from 'react';
import { Avatar } from './Avatar';
import type { AvatarSize, AvatarType } from './Avatar';
import './AvatarGroup.css';

export interface AvatarGroupProps {
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  src?: string;
  alt?: string;
  avatarSize?: AvatarSize;
  avatarType?: AvatarType;
  avatarFallback?: string;
  children?: ReactNode;
  className?: string;
}

export function AvatarGroup({
  title = 'Name Surname',
  subtitle = 'Subtitle',
  showSubtitle = true,
  src,
  alt,
  avatarSize = 'large',
  avatarType,
  avatarFallback,
  children,
  className
}: AvatarGroupProps) {
  const rootClassName = ['avatar-group', className ?? ''].filter(Boolean).join(' ');

  return (
    <div className={rootClassName}>
      <Avatar
        src={src}
        alt={alt || title}
        size={avatarSize}
        type={avatarType}
        fallback={avatarFallback ?? title}
      />
      <div className="avatar-group__content">
        <span className="avatar-group__title">{title}</span>
        {showSubtitle && (
          <div className="avatar-group__subtitle">
            {children ?? <span className="avatar-group__subtitle-text">{subtitle}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
