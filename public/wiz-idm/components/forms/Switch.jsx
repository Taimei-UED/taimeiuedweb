import React from 'react';

/**
 * Toggle switch. Controlled via `checked` + `onChange`, or uncontrolled with
 * `defaultChecked`. `size` "sm" | "md". Optional `label`.
 */
export function Switch({
  checked, defaultChecked = false, disabled = false, size = 'md', label, onChange, style, ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : internal;
  const dims = size === 'sm' ? { w: 32, h: 18, knob: 14 } : { w: 40, h: 22, knob: 18 };
  const pad = (dims.h - dims.knob) / 2;

  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    onChange && onChange(!on);
  };

  const track = (
    <span
      role="switch"
      aria-checked={on}
      onClick={toggle}
      style={{
        position: 'relative', display: 'inline-flex', alignItems: 'center', flex: 'none',
        width: dims.w, height: dims.h, borderRadius: 'var(--radius-full)', boxSizing: 'border-box',
        background: disabled ? (on ? 'var(--brand-blue-40)' : 'var(--grey-40)')
          : on ? 'var(--brand-blue-70)' : 'var(--grey-50)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 160ms ease',
      }}
    >
      <span style={{
        position: 'absolute', top: pad, left: on ? dims.w - dims.knob - pad : pad,
        width: dims.knob, height: dims.knob, borderRadius: '50%', background: 'var(--white)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.25)', transition: 'left 160ms ease',
      }} />
    </span>
  );

  if (!label) return track;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', ...style }} {...rest}>
      {track}
      <span style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: disabled ? 'var(--grey-60)' : 'var(--grey-90)' }}>{label}</span>
    </label>
  );
}

export default Switch;
