import type { HTMLAttributes } from 'react';
import { Icon } from './Icon';
import type { IconSize, IconStyle } from './Icon';
import './FancyIcon.css';

/** Figma Fancy Icon **Size** (Figma labels Medium as "Meidum"). */
export type FancyIconSize = 'small' | 'medium' | 'large';
/** Figma Fancy Icon **Color**. */
export type FancyIconColor = 'blue' | 'neutral';

export interface FancyIconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Font Awesome code passed to the nested Icon (Figma Icon → Icon code). */
  faCode?: string;
  faStyle?: IconStyle;
  size?: FancyIconSize;
  color?: FancyIconColor;
}

/** Container size → nested Icon size, per Figma (24→12, 32→16, 40→20). */
const INNER_ICON_SIZE: Record<FancyIconSize, IconSize> = {
  small: 'xsmall',
  medium: 'small',
  large: 'medium'
};

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function FancyIcon({
  faCode = 'user',
  faStyle = 'regular',
  size = 'small',
  color = 'blue',
  className,
  ...rest
}: FancyIconProps) {
  return (
    <span
      {...rest}
      className={cx('fancy-icon', `fancy-icon--${size}`, `fancy-icon--${color}`, className)}
    >
      <Icon faCode={faCode} faStyle={faStyle} size={INNER_ICON_SIZE[size]} />
    </span>
  );
}
