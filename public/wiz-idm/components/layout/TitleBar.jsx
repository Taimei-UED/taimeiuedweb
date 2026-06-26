import React from 'react';

/** Section title bar — title (+ optional description) on the left, actions on the
 *  right. `divider` draws a bottom hairline. */
export function TitleBar({ title = 'Title', description, actions, divider = false, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 16, padding: '12px 16px', background: 'var(--white)', borderRadius: 0,
      borderBottom: `1px solid ${divider ? 'var(--grey-40)' : 'transparent'}`, ...style,
    }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 18, color: 'var(--grey-90)' }}>{title}</span>
        {description && <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--grey-70)' }}>{description}</span>}
      </div>
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 'none' }}>{actions}</div>}
    </div>
  );
}

export default TitleBar;
