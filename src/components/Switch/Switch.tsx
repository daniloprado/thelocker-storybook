import { useState } from 'react';
import type { ChangeEvent, InputHTMLAttributes } from 'react';
import './Switch.css';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function Switch({
  checked,
  defaultChecked = false,
  disabled = false,
  label,
  onChange,
  className,
  ...rest
}: SwitchProps) {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const currentChecked = isControlled ? checked : internalChecked;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }
    onChange?.(event);
  };

  const rootClassName = [
    'switch',
    currentChecked ? 'switch--selected' : '',
    disabled ? 'switch--disabled' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={rootClassName}>
      <input
        {...rest}
        type="checkbox"
        role="switch"
        className="switch__input"
        checked={currentChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className="switch__track">
        <span className="switch__thumb" />
      </span>
      {label && <span className="switch__label">{label}</span>}
    </label>
  );
}
