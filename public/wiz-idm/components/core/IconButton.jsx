import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

/**
 * Square icon-only button. `variant`: `ghost` (transparent → grey hover),
 * `filled` (grey surface) or `primary` (brand blue).
 */
export function IconButton({
  icon = 'Home5Line',
  variant = 'ghost',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const box = { sm: 28, md: 32, lg: 36, xl: 40 }[size] || 32;
  const glyph = size === 'sm' ? 16 : size === 'xl' ? 20 : 18;
  const [hover, setHover] = React.useState(false);
  const palettes = {
    ghost: { bg: hover ? 'rgba(0,0,0,0.08)' : 'transparent', color: 'var(--grey-90)' },
    filled: { bg: hover ? 'var(--grey-30)' : 'var(--grey-20)', color: 'var(--grey-90)' },
    primary: { bg: hover ? 'var(--brand-blue-80)' : 'var(--brand-blue-70)', color: 'var(--ink-on-accent)' },
  };
  const p = palettes[variant] || palettes.ghost;
  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: box, height: box, padding: 0,
        background: disabled ? 'transparent' : p.bg,
        color: disabled ? 'var(--grey-50)' : p.color,
        border: 'none', borderRadius: 'var(--radius-sm)',
        boxShadow: (disabled || variant === 'ghost') ? 'none' : 'var(--shadow-card)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 120ms ease, box-shadow 120ms ease', ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={glyph} />
    </button>
  );
}

export default IconButton;
