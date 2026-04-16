import { useMemo, useState } from 'react';
import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import './Input.css';

export type InputSize = 'small' | 'middle' | 'large';
export type InputStatus = 'default' | 'error' | 'warning';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  size?: InputSize;
  status?: InputStatus;
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
  onClear?: () => void;
}

export function Input({
  size = 'middle',
  status = 'default',
  prefix,
  suffix,
  allowClear = false,
  disabled = false,
  onChange,
  onClear,
  value,
  defaultValue,
  className,
  ...rest
}: InputProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(String(defaultValue ?? ''));
  const currentValue = isControlled ? String(value ?? '') : internalValue;

  const showClear = useMemo(
    () => allowClear && !disabled && currentValue.length > 0,
    [allowClear, disabled, currentValue]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
    onChange?.(event);
  };

  const handleClear = () => {
    if (!isControlled) {
      setInternalValue('');
    }

    onClear?.();
  };

  return (
    <label
      className={[
        'input',
        `input--${size}`,
        `input--${status}`,
        disabled ? 'input--disabled' : '',
        className ?? ''
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {prefix ? <span className="input__prefix">{prefix}</span> : null}

      <input
        {...rest}
        className="input__field"
        value={currentValue}
        onChange={handleChange}
        disabled={disabled}
      />

      {showClear ? (
        <button
          type="button"
          className="input__clear"
          aria-label="Clear input"
          onClick={handleClear}
        >
          x
        </button>
      ) : null}

      {suffix ? <span className="input__suffix">{suffix}</span> : null}
    </label>
  );
}
