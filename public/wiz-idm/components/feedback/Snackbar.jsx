import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

const TONES = {
  info:    { icon: 'Sparkling2Fill', accent: 'var(--brand-blue-50)', fill: '#0049CD' },
  success: { icon: 'CheckFill',       accent: 'var(--green-60)',      fill: '#1A801A' },
  warning: { icon: 'FileWarningFill', accent: 'var(--yellow-70)',     fill: '#D65900' },
  error:   { icon: 'FileWarningFill', accent: 'var(--signal-error)',  fill: '#DA1E28' },
  loading: { icon: null,              accent: 'var(--brand-blue-50)', fill: '#0049CD' },
};

/** White spinner ring (SMIL, no @keyframes) for the loading snackbar. */
function SnackSpinner({ size = 18 }) {
  const r = size / 2 - 1.5;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', flex: 'none' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth="2" style={{ stroke: '#FFFFFF', opacity: 0.3 }} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth="2" strokeLinecap="round"
        strokeDasharray={`${c * 0.7} ${c}`} style={{ stroke: '#FFFFFF' }}>
        <animateTransform attributeName="transform" type="rotate" from={`0 ${size / 2} ${size / 2}`}
          to={`360 ${size / 2} ${size / 2}`} dur="0.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/**
 * Snackbar — a floating toast for transient feedback. A leading status glyph, a
 * message, an optional text `action`, and a close button.
 * `variant`: "dark" (default, near-black surface) or "filled" (tone-colored
 * background with white text & icons).
 */
export function Snackbar({
  children, title, description, tone = 'info', variant = 'dark', action, actionLabel = 'Undo', onAction,
  footerAction, onFooterAction, closable = true, onClose, style, ...rest
}) {
  const t = TONES[tone] || TONES.info;
  const filled = variant === 'filled';
  const twoLine = title || description || footerAction;
  return (
    <div style={{
      display: 'inline-flex', alignItems: twoLine ? 'flex-start' : 'center', gap: 12, minWidth: 280, maxWidth: 520, boxSizing: 'border-box',
      padding: '12px 14px', background: filled ? t.fill : '#262626', borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-pop)', ...style,
    }} {...rest}>
      {tone === 'loading'
        ? <span style={{ marginTop: twoLine ? 1 : 0, display: 'inline-flex' }}><SnackSpinner size={18} /></span>
        : <Icon name={t.icon} size={18} style={{ color: '#FFFFFF', flex: 'none', marginTop: twoLine ? 1 : 0 }} />}
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {title && <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, color: '#FFFFFF', lineHeight: 1.3 }}>{title}</span>}
        {description && <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'rgba(255,255,255,0.78)', lineHeight: 1.45 }}>{description}</span>}
        {children && <span style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: '#FFFFFF', lineHeight: 1.4 }}>{children}</span>}
        {footerAction && (
          <button type="button" onClick={onFooterAction} style={{
            alignSelf: 'flex-end', marginTop: 8, appearance: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13, padding: '5px 12px',
            borderRadius: 'var(--radius-xs)',
            background: filled ? 'rgba(255,255,255,0.18)' : 'var(--brand-blue-70)',
            border: 'none', color: '#FFFFFF',
          }}>{footerAction}</button>
        )}
      </span>
      {(action || onAction) && (
        <button type="button" onClick={onAction} style={{
          flex: 'none', appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer',
          fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, marginTop: twoLine ? 1 : 0,
          color: filled ? '#FFFFFF' : '#87B0FB', textDecoration: filled ? 'underline' : 'none', padding: '2px 4px',
        }}>{action || actionLabel}</button>
      )}
      {closable && (
        <span onClick={onClose} style={{ flex: 'none', display: 'inline-flex', cursor: 'pointer', opacity: 0.7, marginTop: twoLine ? 2 : 0 }}>
          <Icon name="CloseLine" size={16} style={{ color: '#FFFFFF' }} />
        </span>
      )}
    </div>
  );
}

export default Snackbar;
