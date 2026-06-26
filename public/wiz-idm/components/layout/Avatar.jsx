import React from 'react';

/** Circular avatar. Renders `src` image, else the initial of `name` on brand blue. */
export function Avatar({ name = 'Jane Ju', src, size = 32, style, ...rest }) {
  const initial = (name || '?').trim().charAt(0).toUpperCase();
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
      width: size, height: size, borderRadius: '50%', overflow: 'hidden',
      background: src ? 'var(--grey-30)' : 'var(--brand-blue-70)',
      color: 'var(--ink-on-accent)', fontFamily: 'var(--font-ui)', fontWeight: 600,
      fontSize: Math.round(size * 0.42), ...style,
    }} {...rest}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initial}
    </span>
  );
}

export default Avatar;
