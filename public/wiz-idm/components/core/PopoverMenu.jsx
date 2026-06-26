import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

/**
 * Pop-over menu — the shared floating menu used by the Drop-down button and
 * the Select field. Wrap a trigger; clicking it opens a menu of `items`.
 * Closes on outside-click or Escape.
 *
 * item: { label, icon?, shortcut?, value?, danger?, disabled?, selected?, divider? }
 */
export function PopoverMenu({
  trigger, items = [], onSelect, align = 'left', width = 200, open: openProp, onOpenChange, style, ...rest
}) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = openProp !== undefined ? openProp : internalOpen;
  const setOpen = (v) => { if (openProp === undefined) setInternalOpen(v); onOpenChange && onOpenChange(v); };
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onEsc);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onEsc); };
  }, [open]);

  const choose = (it) => {
    if (it.disabled) return;
    setOpen(false);
    it.onClick && it.onClick();
    onSelect && onSelect(it.value ?? it.label, it);
  };

  return (
    <span ref={ref} style={{ position: 'relative', display: 'inline-flex', ...style }} {...rest}>
      <span onClick={() => setOpen(!open)} style={{ display: 'inline-flex' }}>{trigger}</span>
      {open && (
        <div
          role="menu"
          style={{
            position: 'absolute', top: '100%', marginTop: 6, zIndex: 50, minWidth: width,
            [align === 'right' ? 'right' : 'left']: 0,
            background: 'var(--surface-card)', border: '1px solid var(--grey-40)',
            borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-pop)', padding: 4,
            display: 'flex', flexDirection: 'column', gap: 2, maxHeight: 200, overflowY: 'auto',
          }}
        >
          {items.map((it, i) =>
            it.divider
              ? <span key={'d' + i} style={{ height: 1, background: 'var(--grey-30)', margin: '4px 0' }} />
              : <MenuItem key={it.value ?? it.label ?? i} item={it} onClick={() => choose(it)} />
          )}
        </div>
      )}
    </span>
  );
}

/** A single row inside a PopoverMenu — also exported for custom menus. */
export function MenuItem({ item, onClick }) {
  const [hover, setHover] = React.useState(false);
  const danger = item.danger;
  const selected = item.selected;
  const color = item.disabled ? 'var(--grey-50)'
    : danger ? 'var(--signal-error)'
    : selected ? 'var(--brand-blue-70)' : 'var(--grey-90)';
  return (
    <button
      type="button"
      role="menuitem"
      disabled={item.disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
        padding: '8px 10px', border: 'none', borderRadius: 'var(--radius-xs)',
        background: selected ? 'var(--grey-30)'
          : (hover && !item.disabled) ? 'var(--grey-30)' : 'transparent',
        color, cursor: item.disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-ui)', fontWeight: selected ? 600 : 500, fontSize: 14,
        transition: 'background 100ms ease',
      }}
    >
      {item.icon && <Icon name={item.icon} size={16} style={{ flex: 'none', color }} />}
      <span style={{ flex: 1 }}>{item.label}</span>
      {item.shortcut && <span style={{ fontSize: 13, color: 'var(--grey-60)', fontFamily: 'var(--font-mono)' }}>{item.shortcut}</span>}
      {selected && <Icon name="CheckFill" size={16} style={{ flex: 'none', color: 'var(--brand-blue-70)' }} />}
    </button>
  );
}

export default PopoverMenu;
