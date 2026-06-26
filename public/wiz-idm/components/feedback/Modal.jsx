import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
import { Button } from '../core/Button.jsx';

/**
 * Centered modal dialog. Renders an overlay when `open`. Provide `footer`
 * or rely on the default Cancel / Confirm pair via `onCancel` / `onConfirm`.
 */
export function Modal({
  open = true, title = 'Modal Title', children, width = 560,
  onClose, onCancel, onConfirm, confirmLabel = 'Confirm', cancelLabel = 'Cancel',
  footer, style, ...rest
}) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(17,20,30,0.45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 24,
    }} onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width, maxWidth: '100%', background: 'var(--white)', borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-modal)', overflow: 'hidden',
          display: 'flex', flexDirection: 'column', ...style,
        }}
        {...rest}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px 0' }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 18, color: 'var(--grey-90)' }}>{title}</h3>
          <IconButton icon="CloseLine" variant="ghost" onClick={onClose} />
        </div>
        <div style={{ padding: '16px 24px', color: 'var(--grey-90)', fontFamily: 'var(--font-ui)', fontSize: 14, lineHeight: 1.55 }}>
          {children}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 24px 20px' }}>
          {footer || (
            <>
              <Button variant="normal" onClick={onCancel || onClose}>{cancelLabel}</Button>
              <Button variant="primary" onClick={onConfirm}>{confirmLabel}</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
