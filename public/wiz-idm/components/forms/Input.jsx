import React from 'react';
import { Field } from './Field.jsx';

const baseInput = (focus, error, disabled, size) => ({
  width: '100%', boxSizing: 'border-box', height: size === 'sm' ? 28 : 36, padding: size === 'sm' ? '0 10px' : '0 12px',
  fontFamily: 'var(--font-ui)', fontSize: size === 'sm' ? 13 : 14, color: disabled ? 'var(--grey-60)' : 'var(--grey-90)',
  background: disabled ? 'var(--grey-20)' : 'var(--white)',
  border: `1px solid ${error ? 'var(--signal-error)' : focus ? 'var(--brand-blue-70)' : 'var(--grey-50)'}`,
  borderRadius: 'var(--radius-sm)', outline: 'none',
  boxShadow: focus && !error ? '0 0 0 3px var(--brand-blue-10)' : 'none',
  transition: 'border-color 120ms ease, box-shadow 120ms ease',
});

/** Single-line text input with optional label, required mark and error. */
export function Input({
  label, required, error, disabled, size = 'md', placeholder = 'Input...', value, defaultValue,
  onChange, style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = (
    <input
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{ ...baseInput(focus, error, disabled, size), ...style }}
      {...rest}
    />
  );
  if (!label && !error) return field;
  return <Field label={label} required={required} error={error} style={style}>{field}</Field>;
}

export default Input;
