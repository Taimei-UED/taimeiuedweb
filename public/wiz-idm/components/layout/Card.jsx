import React from 'react';

/**
 * Surface container. `elevation`: "ring" (hairline border, default),
 * "card" (soft shadow) or "flat" (no border). `padding` in px.
 */
export function Card({ elevation = 'ring', padding = 20, radius = 16, children, style, ...rest }) {
  const shadow = elevation === 'card' ? 'var(--shadow-card)'
    : elevation === 'ring' ? 'var(--ring-hairline)' : 'none';
  return (
    <div style={{
      background: 'var(--surface-card)', borderRadius: radius, boxShadow: shadow,
      padding, boxSizing: 'border-box', ...style,
    }} {...rest}>
      {children}
    </div>
  );
}

export default Card;
