import { Icon } from '../Icon/Icon';
import './Avatar.css';

export type AvatarSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type AvatarShape = 'circle' | 'square' | 'rounded';
export type AvatarType = 'image' | 'placeholder' | 'initials';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  type?: AvatarType;
  fallback?: string;
  className?: string;
}

const ICON_SIZE_MAP: Record<AvatarSize, 'xxsmall' | 'xsmall' | 'small'> = {
  xsmall: 'xxsmall',
  small: 'xxsmall',
  medium: 'xsmall',
  large: 'small',
  xlarge: 'small'
};

function resolveType(type: AvatarType | undefined, src: string | undefined): AvatarType {
  if (type) return type;
  if (src) return 'image';
  return 'placeholder';
}

function getInitials(text?: string): string | undefined {
  if (!text) return undefined;
  return text
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function Avatar({
  src,
  alt = '',
  size = 'medium',
  shape = 'circle',
  type,
  fallback,
  className
}: AvatarProps) {
  const resolved = resolveType(type, src);

  const rootClassName = [
    'avatar',
    `avatar--${size}`,
    `avatar--${shape}`,
    `avatar--${resolved}`,
    className ?? ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={rootClassName} role="img" aria-label={alt || fallback || 'avatar'}>
      {resolved === 'image' && src ? (
        <img className="avatar__image" src={src} alt={alt} />
      ) : resolved === 'initials' ? (
        <span className="avatar__initials">{getInitials(fallback)}</span>
      ) : (
        <span className="avatar__placeholder">
          <Icon fa-code="user" fa-style="regular" size={ICON_SIZE_MAP[size]} />
        </span>
      )}
    </span>
  );
}
