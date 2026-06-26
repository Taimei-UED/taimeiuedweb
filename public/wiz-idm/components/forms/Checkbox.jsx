import React from 'react';

/** Checkbox. `state`: "unchecked" | "checked" | "indeterminate". `forceHover` renders the hover visual statically (for specimens). */
export function Checkbox({
  state, checked, indeterminate = false, disabled = false, label, forceHover = false,
  onChange, style, ...rest
}) {
  const resolved = state || (indeterminate ? 'indeterminate' : checked ? 'checked' : 'unchecked');
  const on = resolved !== 'unchecked';
  const [hoverState, setHover] = React.useState(false);
  const hover = forceHover || hoverState;
  const box = (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={disabled ? undefined : onChange}
      style={{
        position: 'relative',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 18, height: 18, flex: 'none', boxSizing: 'border-box', borderRadius: 'var(--radius-xs)',
        background: disabled ? (on ? 'var(--brand-blue-40)' : 'var(--grey-20)')
          : on ? (hover ? 'var(--brand-blue-80)' : 'var(--brand-blue-70)') : 'var(--white)',
        border: on ? 'none' : `${hover && !disabled ? 2 : 1}px solid ${disabled ? 'var(--grey-50)' : hover ? 'var(--brand-blue-70)' : 'var(--grey-50)'}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 120ms ease, border-color 120ms ease',
      }}
    >
      {resolved === 'checked' && (
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: disabled ? 0.7 : 1 }}>
          <path d="M2.5 6.2 L4.8 8.5 L9.5 3.5" stroke="var(--ink-on-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {resolved === 'indeterminate' && (
        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 9, height: 1.5, borderRadius: 1, background: 'var(--ink-on-accent)', opacity: disabled ? 0.7 : 1 }} />
      )}
    </span>
  );
  if (!label) return box;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', ...style }} {...rest}>
      {box}
      <span style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: disabled ? 'var(--grey-60)' : 'var(--grey-90)' }}>{label}</span>
    </label>
  );
}

export default Checkbox;
