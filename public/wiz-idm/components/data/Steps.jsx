import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

/** Inline SVG spinner ring (brand blue) — animates via SMIL, no @keyframes. */
function Spinner({ size = 24 }) {
  const r = size / 2 - 1.5;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth="3"
        style={{ stroke: 'var(--brand-blue-70)', opacity: 0.18 }} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth="3"
        strokeLinecap="round" strokeDasharray={`${c * 0.72} ${c}`}
        style={{ stroke: 'var(--brand-blue-70)' }}>
        <animateTransform attributeName="transform" type="rotate" from={`0 ${size / 2} ${size / 2}`}
          to={`360 ${size / 2} ${size / 2}`} dur="0.9s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** The 24px status disc for a step. */
function StepCircle({ status, number, checkCompleted }) {
  if (status === 'loading') {
    return <span style={{ display: 'inline-flex', width: 24, height: 24, flex: 'none' }}><Spinner size={24} /></span>;
  }
  if (status === 'completed' && checkCompleted) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: 'var(--brand-blue-70)', flex: 'none' }}>
        <Icon name="CheckFill" size={15} style={{ color: 'var(--white)' }} />
      </span>
    );
  }
  // completed + active → solid blue disc + white number
  // upcoming → white disc, grey-70 outline, dark number
  const filled = status === 'completed' || status === 'active';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24,
      borderRadius: '50%', flex: 'none', boxSizing: 'border-box',
      background: filled ? 'var(--brand-blue-70)' : 'var(--white)',
      border: status === 'upcoming' ? '1.5px solid var(--grey-70)' : 'none',
      color: filled ? 'var(--white)' : 'var(--grey-90)',
      fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 12, letterSpacing: '0.4px',
    }}>{number}</span>
  );
}

/**
 * A single step item — the atomic unit of the Stepper: a status disc
 * (number / check / spinner) beside a name + optional description.
 *
 * `status`: "completed" | "active" | "loading" | "upcoming".
 *  - completed / active → solid blue disc (white number, or a check when
 *    `checkCompleted`); active is the current step.
 *  - loading            → brand-blue spinner ring.
 *  - upcoming           → white disc with a grey-70 outline and dark number.
 * `selected` darkens the label (used for the active step).
 */
export function StepItem({
  status = 'upcoming', number, label, description, selected, checkCompleted = false, connector = false, style, ...rest
}) {
  const dark = selected ?? status === 'active';
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'stretch', ...style }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
        <StepCircle status={status} number={number} checkCompleted={checkCompleted} />
        {connector && (
          <span style={{ width: 2, flex: 1, minHeight: 28, margin: '4px 0', borderRadius: 1, background: 'var(--grey-40)' }} />
        )}
      </div>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0, paddingBottom: connector ? 32 : 0 }}>
        <span style={{
          fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, lineHeight: 1,
          letterSpacing: '0.077px', whiteSpace: 'nowrap',
          color: dark ? 'var(--grey-90)' : 'var(--grey-80)',
        }}>{label}</span>
        {description && (
          <span style={{
            fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 13, lineHeight: 1,
            letterSpacing: '0.077px', color: 'var(--grey-70)',
          }}>{description}</span>
        )}
      </span>
    </div>
  );
}

/**
 * Step / progress indicator — recreated from the Wiz "Step Items" Figma.
 * Composes <StepItem> for each entry and draws grey arrow connectors between
 * them (horizontal only).
 *
 * `steps`: [{ label, description }]. `current` (0-based) is the active step;
 * earlier steps are completed, later steps are upcoming. `loading` swaps the
 * active step's disc for a spinner. `checkCompleted` shows a check on completed
 * steps instead of their number. `orientation` "horizontal" | "vertical".
 */
export function Steps({ steps = [], current = 0, loading = false, checkCompleted = false, orientation = 'horizontal', style, ...rest }) {
  const statusOf = (i) =>
    i < current ? 'completed' : i === current ? (loading ? 'loading' : 'active') : 'upcoming';

  const vertical = orientation === 'vertical';
  return (
    <div style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row',
      gap: vertical ? 0 : 16, alignItems: vertical ? 'stretch' : 'flex-start', ...style }} {...rest}>
      {steps.map((s, i) => {
        const status = statusOf(i);
        const last = i === steps.length - 1;
        return (
          <React.Fragment key={i}>
            <StepItem
              status={status} number={i + 1} label={s.label} description={s.description}
              selected={i === current} checkCompleted={checkCompleted} connector={vertical && !last}
              style={{ flex: !vertical ? '1 1 0' : 'none', minWidth: !vertical ? 150 : undefined }}
            />
            {!vertical && !last && (
              <Icon name="ArrowRightSLine" size={18} style={{ color: 'var(--grey-70)', flex: 'none', marginTop: 3 }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Steps;
