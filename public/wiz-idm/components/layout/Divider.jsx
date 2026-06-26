import React from 'react';

/** Divider. Horizontal (optional text label, position left/center/right) or vertical. */
export function Divider({ orientation = 'horizontal', children, align = 'center', style, ...rest }) {
  if (orientation === 'vertical') {
    return <span style={{ display: 'inline-block', width: 1, alignSelf: 'stretch', minHeight: 16, background: 'var(--grey-40)', ...style }} {...rest} />;
  }
  const line = <span style={{ flex: 1, height: 1, background: 'var(--grey-40)' }} />;
  if (!children) {
    return <div style={{ height: 1, width: '100%', background: 'var(--grey-40)', ...style }} {...rest} />;
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', ...style }} {...rest}>
      {align !== 'left' && line}
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 12, color: 'var(--grey-70)', whiteSpace: 'nowrap' }}>{children}</span>
      {align !== 'right' && line}
    </div>
  );
}

export default Divider;
