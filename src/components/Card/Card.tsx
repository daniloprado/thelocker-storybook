import type { HTMLAttributes, ReactNode } from 'react';
import { Chip } from '../Chip/Chip';
import './Card.css';

export type CardSize = 'small' | 'medium' | 'large' | 'stretch';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: CardSize;
  title?: string;
  description?: string;
  tag?: string;
  imageSrc?: string;
  children?: ReactNode;
}

export function Card({
  size = 'medium',
  title = 'Heading',
  description,
  tag,
  imageSrc,
  children,
  className,
  ...rest
}: CardProps) {
  const classes = ['card', `card--${size}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      <div className="card__image">
        {imageSrc ? <img src={imageSrc} alt="" /> : null}
      </div>

      <div className="card__body">
        {children ?? (
          <>
            {tag ? (
              <div className="card__tag">
                <Chip label={tag} size="small" color="blue" />
              </div>
            ) : null}
            <h3 className="card__title">{title}</h3>
            {description ? <p className="card__description">{description}</p> : null}
          </>
        )}
      </div>
    </div>
  );
}
