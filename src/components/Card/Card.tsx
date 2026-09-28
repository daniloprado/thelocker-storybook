import type { HTMLAttributes, ReactNode } from 'react';
import { Chip } from '../Chip/Chip';
import './Card.css';

export type CardSize = 'small' | 'medium' | 'large' | 'stretch';
export type CardType = 'empty' | 'vertical' | 'horizontal';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: CardSize;
  /** Figma Type. Vertical and Horizontal show the top/media slot. */
  type?: CardType;
  title?: string;
  description?: string;
  tag?: string;
  /**
   * Figma Image boolean. When false, the top slot is hidden.
   * Ignored when `type` is `empty`.
   */
  image?: boolean;
  imageSrc?: string;
  /** Figma Top Slot. Overrides `imageSrc` when provided. */
  topSlot?: ReactNode;
  children?: ReactNode;
}

export function Card({
  size = 'medium',
  type = 'vertical',
  title = 'Heading',
  description,
  tag,
  image = true,
  imageSrc,
  topSlot,
  children,
  className,
  ...rest
}: CardProps) {
  const showMedia = type !== 'empty' && image;
  const classes = [
    'card',
    `card--${size}`,
    `card--${type}`,
    showMedia ? 'card--media' : 'card--no-media',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {showMedia ? (
        <div className="card__image">
          {topSlot ?? (imageSrc ? <img src={imageSrc} alt="" /> : null)}
        </div>
      ) : null}

      <div className="card__body">
        {children !== undefined ? (
          children
        ) : (
          <>
            {tag ? <Chip label={tag} size="small" color="yellow" /> : null}
            <h3 className="card__title">{title}</h3>
            {description ? <p className="card__description">{description}</p> : null}
          </>
        )}
      </div>
    </div>
  );
}
