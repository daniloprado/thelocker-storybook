import type { SVGProps } from 'react';
import './Chip.css';

export type ChipColor = 'green' | 'red' | 'orange' | 'teal' | 'yellow' | 'blue' | 'pink' | 'neutral' | 'white';
export type ChipSize = 'small' | 'medium' | 'large';

export interface ChipProps {
  label?: string;
  color?: ChipColor;
  size?: ChipSize;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
}

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M8 2.3l1.7 3.45 3.8.55-2.75 2.67.65 3.78L8 10.95l-3.4 1.8.65-3.78L2.5 6.3l3.8-.55L8 2.3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
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
  white: 'chip--white'
};

export function Chip({
  label = 'Chip',
  color = 'green',
  size = 'small',
  showLeadingIcon = true,
  showTrailingIcon = true
}: ChipProps) {
  return (
    <span className={`chip chip--${size} ${COLOR_CLASS[color]}`}>
      {showLeadingIcon ? <StarIcon className="chip__icon" /> : null}
      <span className="chip__label">{label}</span>
      {showTrailingIcon ? <CloseIcon className="chip__icon" /> : null}
    </span>
  );
}
