import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

/**
 * Primary action button. `variant` sets the visual weight, `size` the
 * height. Optional leading `icon` (icon-set name) and trailing dropdown
 * `chevron`.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  chevron = false,
  disabled = false,
  loading = false,
  children,
  style,
  ...rest
}) {
  const heights = { sm: 28, md: 36, lg: 44 };
  const fs = size === 'sm' ? 13 : size === 'lg' ? 15 : 14;
  const pad = size === 'sm' ? '0 12px' : size === 'lg' ? '0 22px' : '0 16px';
  const glyph = size === 'lg' ? 18 : 16;
  const isOff = disabled || loading;

  const palettes = {
    primary: { bg: 'var(--brand-blue-70)', color: 'var(--white)', border: 'transparent',
      hover: 'var(--brand-blue-80)', active: 'var(--brand-blue-90)' },
    normal: { bg: 'var(--white)', color: 'var(--grey-90)', border: 'var(--grey-40)',
      hover: 'var(--grey-20)', active: 'var(--grey-30)' },
    text: { bg: 'transparent', color: 'var(--brand-blue-70)', border: 'transparent',
      hover: 'var(--brand-blue-10)', active: 'var(--brand-blue-20)' },
  };
  const p = palettes[variant] || palettes.primary;
  const [state, setState] = React.useState('rest');
  const bg = isOff ? (variant === 'primary' ? 'var(--brand-blue-30)' : 'var(--grey-20)')
    : state === 'active' ? p.active : state === 'hover' ? p.hover : p.bg;

  return (
    <button
      type="button"
      disabled={isOff}
      onMouseEnter={() => setState('hover')}
      onMouseLeave={() => setState('rest')}
      onMouseDown={() => setState('active')}
      onMouseUp={() => setState('hover')}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        height: heights[size], padding: pad,
        fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: fs,
        color: isOff ? (variant === 'primary' ? 'rgba(255,255,255,0.85)' : 'var(--grey-60)') : (variant === 'primary' ? 'var(--ink-on-accent)' : p.color),
        background: bg,
        border: `1px solid ${variant === 'normal' ? p.border : 'transparent'}`,
        borderRadius: 'var(--radius-sm)',
        boxShadow: (isOff || variant === 'text') ? 'none' : 'var(--shadow-card)',
        cursor: disabled ? 'not-allowed' : loading ? 'progress' : 'pointer',
        transition: 'background 120ms ease, color 120ms ease, box-shadow 120ms ease',
        whiteSpace: 'nowrap', userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      {loading
        ? <Spinner size={glyph} variant={variant} />
        : icon && <Icon name={icon} size={glyph} style={{ flex: 'none' }} />}
      {children}
      {chevron && !loading && <Icon name="ArrowDownSLine" size={glyph} style={{ flex: 'none', marginRight: -4 }} />}
    </button>
  );
}

function Spinner({ size = 16, variant = 'primary' }) {
  const stroke = variant === 'primary' ? 'var(--ink-on-accent)' : 'var(--grey-70)';
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ flex: 'none', animation: 'wiz-spin 0.7s linear infinite' }}>
      <circle cx="8" cy="8" r="6.5" fill="none" stroke={stroke} strokeWidth="2" strokeOpacity="0.25" />
      <path d="M8 1.5 A6.5 6.5 0 0 1 14.5 8" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <style>{`@keyframes wiz-spin{to{transform:rotate(360deg)}}`}</style>
    </svg>
  );
}

export default Button;
