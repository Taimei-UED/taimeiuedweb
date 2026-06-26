import React from 'react';

/** Radio control. */
export function Radio({ checked = false, disabled = false, label, onChange, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const dot = (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={disabled ? undefined : onChange}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 18, height: 18, flex: 'none', borderRadius: '50%', boxSizing: 'border-box',
        border: `${checked ? 5 : 1.5}px solid ${
          disabled ? 'var(--grey-50)' : checked ? 'var(--brand-blue-70)' : hover ? 'var(--brand-blue-70)' : 'var(--grey-50)'}`,
        background: 'var(--white)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'border 120ms ease',
      }}
    />
  );
  if (!label) return dot;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', ...style }} {...rest}>
      {dot}
      <span style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: disabled ? 'var(--grey-60)' : 'var(--grey-90)' }}>{label}</span>
    </label>
  );
}

export default Radio;
