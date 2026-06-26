import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

const TONES = {
  warning: { bg: 'var(--yellow-10)', fg: 'var(--yellow-70)', border: 'var(--yellow-30)', icon: 'FileWarningFill' },
  error: { bg: 'var(--red-10)', fg: 'var(--signal-error)', border: 'var(--red-30)', icon: 'FileWarningFill' },
  success: { bg: 'var(--green-10)', fg: 'var(--green-60)', border: 'var(--green-30)', icon: 'CheckFill' },
  info: { bg: 'var(--brand-blue-10)', fg: 'var(--brand-blue-70)', border: 'var(--brand-blue-30)', icon: 'Sparkling2Fill' },
};

/** Inline message / alert banner. */
export function Message({ children, tone = 'warning', closable = true, onClose, style, ...rest }) {
  const t = TONES[tone] || TONES.warning;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '8px 12px', background: t.bg, border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-sm)', width: '100%', boxSizing: 'border-box', ...style,
    }} {...rest}>
      <Icon name={t.icon} size={16} style={{ color: t.fg, flex: 'none' }} />
      <span style={{ flex: 1, minWidth: 0, fontFamily: 'var(--font-ui)', fontSize: 13, color: t.fg, lineHeight: 1.4 }}>{children}</span>
      {closable && (
        <span onClick={onClose} style={{ display: 'inline-flex', cursor: 'pointer', marginLeft: 8, flex: 'none', opacity: 0.6 }}>
          <Icon name="CloseLine" size={14} style={{ color: t.fg }} />
        </span>
      )}
    </div>
  );
}

export default Message;
