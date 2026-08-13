import './FilterChip.css';

export interface FilterChipProps {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  showClose?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  className?: string;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function FilterChip({
  label,
  selected = false,
  disabled = false,
  showClose = false,
  onClose,
  onClick,
  className
}: FilterChipProps) {
  const isInteractive = Boolean(onClick) && !disabled;

  return (
    <span
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      className={cx(
        'filter-chip',
        selected && 'filter-chip--selected',
        disabled && 'filter-chip--disabled',
        isInteractive && 'filter-chip--interactive',
        className
      )}
      onClick={isInteractive ? onClick : undefined}
      onKeyDown={isInteractive ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); } : undefined}
    >
      <span className="filter-chip__label">{label}</span>
      {showClose && !disabled && (
        <button
          type="button"
          className="filter-chip__close"
          aria-label={`Remove ${label}`}
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
        >
          ✕
        </button>
      )}
    </span>
  );
}
