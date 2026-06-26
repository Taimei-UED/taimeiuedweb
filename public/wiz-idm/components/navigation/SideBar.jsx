import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';
import { Avatar } from '../layout/Avatar.jsx';

/** A single nav row inside the SideBar. */
export function SideBarItem({ icon = 'Home5Line', label, active = false, collapsed = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title={collapsed ? label : undefined}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, width: '100%',
        padding: '9px 12px', justifyContent: 'flex-start',
        background: active ? 'var(--brand-blue-70)' : hover ? 'var(--grey-20)' : 'transparent',
        boxShadow: 'none',
        border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
        fontFamily: 'var(--font-ui)', fontWeight: active ? 600 : 500, fontSize: 14,
        color: active ? 'var(--white)' : 'var(--grey-80)', textAlign: 'left',
        transition: 'background 120ms ease', ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={20} style={{ flex: 'none', color: active ? 'var(--white)' : 'var(--grey-80)' }} />
      {!collapsed && <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>}
    </button>
  );
}

/**
 * Left navigation rail. `items`: [{ icon, label, value }]. `value`/`onSelect`
 * control the active row. `collapsed` shows the icon-only rail. `user` renders
 * the avatar/email footer.
 */
export function SideBar({
  items = [], value, onSelect, collapsed = false, onToggle, footerItems = [],
  user = { name: 'Jane Ju', email: 'jian.ju@taimei.com' }, style, ...rest
}) {
  const width = collapsed ? 68 : 224;
  return (
    <nav style={{
      display: 'flex', flexDirection: 'column', width, boxSizing: 'border-box', height: '100%',
      background: 'var(--white)', borderRight: '1px solid var(--grey-40)', padding: 12, gap: 4,
      transition: 'width 160ms ease', ...style,
    }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {items.map((it) => (
          <SideBarItem key={it.value ?? it.label} icon={it.icon} label={it.label}
            collapsed={collapsed} active={(value ?? items[0]?.value) === (it.value ?? it.label)}
            onClick={() => onSelect && onSelect(it.value ?? it.label)} />
        ))}
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {footerItems.map((it) => (
          <button key={it.label} type="button" onClick={it.onClick} title={it.label}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
              width: '100%', padding: '9px 12px', background: 'transparent', border: 'none',
              borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>
            <Icon name={it.icon} size={20} style={{ flex: 'none', color: 'var(--grey-80)' }} />
          </button>
        ))}
        <button type="button" onClick={onToggle} title={collapsed ? 'Expand' : 'Collapse'}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            width: '100%', padding: '9px 12px', background: 'transparent', border: 'none',
            borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>
          <Icon name={collapsed ? 'SidebarExpand' : 'SidebarShrink'} size={20} style={{ flex: 'none', color: 'var(--grey-80)' }} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', justifyContent: 'flex-start' }}>
          <Avatar name={user.name} size={24} />
          {!collapsed && (
            <span style={{ minWidth: 0, fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--grey-80)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email}</span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
