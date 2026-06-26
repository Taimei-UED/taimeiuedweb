import React from 'react';

/** Shared label + error chrome for form controls. */
export function Field({ label, required = false, error, children, style }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13, color: 'var(--grey-90)' }}>
          {required && <span style={{ color: 'var(--signal-error)', marginRight: 2 }}>*</span>}
          {label}
        </span>
      )}
      {children}
      {error && (
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--signal-error)' }}>{error}</span>
      )}
    </label>
  );
}

export default Field;
