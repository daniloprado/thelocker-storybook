import type { HTMLAttributes } from 'react';
import './Icon.css';

export type IconStyle = 'solid' | 'regular' | 'light';
export type IconSize = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  'fa-code'?: string;
  'fa-style'?: IconStyle;
  faCode?: string;
  faStyle?: IconStyle;
  size?: IconSize;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

function normalizeFaCode(code: string): string {
  return code
    .trim()
    .toLowerCase()
    .replace(/^fa-/, '')
    .replace(/\s+/g, '-');
}

const FA_STYLE_CLASS: Record<IconStyle, string> = {
  solid: 'fa-solid',
  regular: 'fa-regular',
  light: 'fa-light'
};

export function Icon({
  className,
  size = 'medium',
  'fa-code': faCodeKebab,
  'fa-style': faStyleKebab,
  faCode,
  faStyle,
  ...rest
}: IconProps) {
  const resolvedCode = normalizeFaCode(faCodeKebab ?? faCode ?? 'plus');
  const resolvedStyle = faStyleKebab ?? faStyle ?? 'regular';
  const styleClass = FA_STYLE_CLASS[resolvedStyle];
  const hasAriaLabel = typeof rest['aria-label'] === 'string' && rest['aria-label'].length > 0;

  return (
    <span
      {...rest}
      role={hasAriaLabel ? 'img' : undefined}
      aria-hidden={hasAriaLabel ? undefined : true}
      className={cx('icon', `icon--${size}`, `icon--${resolvedStyle}`, className)}
    >
      <i className={cx(styleClass, `fa-${resolvedCode}`, 'icon__glyph')} />
    </span>
  );
}
