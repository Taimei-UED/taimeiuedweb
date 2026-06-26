import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Icon } from '../../assets/icons/Icon.jsx';

function TrafficLights() {
  return (
    <span style={{ display: 'inline-flex', gap: 8, marginRight: 8 }}>
      {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
        <span key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
      ))}
    </span>
  );
}

function WinControls() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 20, color: 'var(--grey-80)' }}>
      <span style={{ width: 12, height: 1.5, background: 'currentColor' }} />
      <span style={{ width: 11, height: 11, border: '1.5px solid currentColor', borderRadius: 2 }} />
      <Icon name="CloseLine" size={16} />
    </span>
  );
}

/** Top application bar — window chrome + Wiz logo + project selector. */
export function TopNav({ platform = 'mac', project = 'iTaimei- EDC_UAT', onProjectClick, right, style, ...rest }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', height: 52, padding: '0 16px',
      background: 'var(--white)', borderBottom: '1px solid var(--grey-40)', gap: 12, ...style,
    }} {...rest}>
      {platform === 'mac' && <TrafficLights />}
      <Logo height={20} />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <button type="button" onClick={onProjectClick} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 10px',
          background: 'none', border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-sm)',
          fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, color: 'var(--grey-90)',
        }}>
          {project}
          <Icon name="ArrowDownSLine" size={16} style={{ color: 'var(--grey-70)' }} />
        </button>
      </div>
      {right || (platform === 'windows' ? <WinControls /> : <span style={{ width: 60 }} />)}
    </header>
  );
}

export default TopNav;
