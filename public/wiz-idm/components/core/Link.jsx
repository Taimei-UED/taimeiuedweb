import React from 'react';

/** Link button — brand-blue text; hover fills with Brand Blue 20. */
export function Link({ children, href = '#', disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={disabled ? undefined : href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: 10,
        padding: 4, borderRadius: 'var(--radius-xs)',
        fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 14,
        color: disabled ? 'var(--grey-60)' : 'var(--brand-blue-70)',
        background: hover && !disabled ? 'var(--brand-blue-20)' : 'transparent',
        textDecoration: hover && !disabled ? 'underline' : 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 120ms ease',
        ...style,
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

export default Link;
