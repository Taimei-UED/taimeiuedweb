import React from 'react';
import { Field } from './Field.jsx';

/** Multi-line text input. */
export function Textarea({
  label, required, error, disabled, placeholder = 'Input...', rows = 3,
  value, defaultValue, onChange, style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = (
    <textarea
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        width: '100%', boxSizing: 'border-box', padding: '8px 12px', resize: 'vertical',
        fontFamily: 'var(--font-ui)', fontSize: 14, color: 'var(--grey-90)', lineHeight: 1.5,
        background: disabled ? 'var(--grey-20)' : 'var(--white)',
        border: `1px solid ${error ? 'var(--signal-error)' : focus ? 'var(--brand-blue-70)' : 'var(--grey-50)'}`,
        borderRadius: 'var(--radius-sm)', outline: 'none',
        boxShadow: focus && !error ? '0 0 0 3px var(--brand-blue-10)' : 'none',
        transition: 'border-color 120ms ease, box-shadow 120ms ease',
      }}
      {...rest}
    />
  );
  if (!label && !error) return field;
  return <Field label={label} required={required} error={error} style={style}>{field}</Field>;
}

export default Textarea;
