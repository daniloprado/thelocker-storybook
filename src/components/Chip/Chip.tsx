import type { ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import './Chip.css';

export type ChipColor =
  | 'green'
  | 'red'
  | 'orange'
  | 'teal'
  | 'yellow'
  | 'blue'
  | 'pink'
  | 'neutral'
  | 'white'
  | 'whiteStrong';

export type ChipSize = 'small' | 'medium' | 'large';

export interface ChipProps {
  label?: string;
  color?: ChipColor;
  size?: ChipSize;
  /** Figma: Show heading slot. When true and `leading` is omitted, a default icon is shown. */
  showLeadingIcon?: boolean;
  /** Figma: Show trailing slot. When true and `trailing` is omitted, a default icon is shown. */
  showTrailingIcon?: boolean;
  /** Leading slot content (Figma Leading Slot). */
  leading?: ReactNode;
  /** Trailing slot content (Figma Trailing Slot). */
  trailing?: ReactNode;
  className?: string;
}

const COLOR_CLASS: Record<ChipColor, string> = {
  green: 'chip--green',
  red: 'chip--red',
  orange: 'chip--orange',
  teal: 'chip--teal',
  yellow: 'chip--yellow',
  blue: 'chip--blue',
  pink: 'chip--pink',
  neutral: 'chip--neutral',
  white: 'chip--white',
  whiteStrong: 'chip--white-strong'
};

const ICON_SIZE: Record<ChipSize, 'xxsmall' | 'xsmall'> = {
  small: 'xxsmall',
  medium: 'xsmall',
  large: 'xsmall'
};

export function Chip({
  label = 'Chip',
  color = 'green',
  size = 'small',
  showLeadingIcon = false,
  showTrailingIcon = false,
  leading,
  trailing,
  className
}: ChipProps) {
  const leadingNode =
    leading ??
    (showLeadingIcon ? <Icon fa-code="star" fa-style="regular" size={ICON_SIZE[size]} /> : null);
  const trailingNode =
    trailing ??
    (showTrailingIcon ? <Icon fa-code="xmark" fa-style="regular" size={ICON_SIZE[size]} /> : null);

  const classes = ['chip', `chip--${size}`, COLOR_CLASS[color], className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {leadingNode ? <span className="chip__slot chip__slot--leading">{leadingNode}</span> : null}
      <span className="chip__label">{label}</span>
      {trailingNode ? <span className="chip__slot chip__slot--trailing">{trailingNode}</span> : null}
    </span>
  );
}
