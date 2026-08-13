import { useState } from 'react';
import type { ChangeEvent, InputHTMLAttributes } from 'react';
import './RadioButton.css';

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function RadioButton({
  checked,
  defaultChecked = false,
  disabled = false,
  label,
  onChange,
  className,
  ...rest
}: RadioButtonProps) {
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
    'radio-button',
    currentChecked ? 'radio-button--selected' : '',
    disabled ? 'radio-button--disabled' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={rootClassName}>
      <input
        {...rest}
        type="radio"
        className="radio-button__input"
        checked={currentChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className="radio-button__visual">
        <span className="radio-button__dot" />
      </span>
      {label && <span className="radio-button__label">{label}</span>}
    </label>
  );
}
