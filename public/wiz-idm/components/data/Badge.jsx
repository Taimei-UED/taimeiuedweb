import React from 'react';

const TONES = {
  purple: { fg: 'var(--purple-60)', bg: 'var(--purple-10)', solid: 'var(--purple-60)' },
  blue: { fg: 'var(--brand-blue-70)', bg: 'var(--brand-blue-10)', solid: 'var(--brand-blue-70)' },
  green: { fg: 'var(--green-60)', bg: 'var(--green-10)', solid: 'var(--green-60)' },
  red: { fg: 'var(--signal-error)', bg: 'var(--red-10)', solid: 'var(--signal-error)' },
  yellow: { fg: 'var(--yellow-70)', bg: 'var(--yellow-10)', solid: 'var(--yellow-70)' },
  grey: { fg: 'var(--grey-80)', bg: 'var(--grey-30)', solid: 'var(--grey-80)' },
};

/** Status badge / tag. `tone` sets colour, `variant` soft-tint / solid / outline / dot. */
export function Badge({ children, tone = 'purple', variant = 'soft', style, ...rest }) {
  const t = TONES[tone] || TONES.purple;
  if (variant === 'dot') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, ...style }} {...rest}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: t.fg, flex: 'none' }} />
        {children && <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--grey-90)' }}>{children}</span>}
      </span>
    );
  }
  const base = {
    display: 'inline-flex', alignItems: 'center', height: 22, padding: '0 8px',
    fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 11, letterSpacing: '0.04em',
    textTransform: 'uppercase', color: t.fg, borderRadius: 'var(--radius-xs)',
    whiteSpace: 'nowrap', ...style,
  };
  if (variant === 'outline') {
    return <span style={{ ...base, background: 'var(--white)', boxShadow: `inset 0 0 0 1px ${t.fg}` }} {...rest}>{children}</span>;
  }
  if (variant === 'solid') {
    return <span style={{ ...base, color: 'var(--white)', background: t.solid }} {...rest}>{children}</span>;
  }
  return <span style={{ ...base, background: t.bg }} {...rest}>{children}</span>;
}

export default Badge;
