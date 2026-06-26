import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';
import { Switch } from '../forms/Switch.jsx';

/**
 * List container — a vertical stack of ListItem rows. `bordered` wraps it in a
 * hairline card; `inset` adds horizontal padding.
 */
export function List({ bordered = false, children, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      border: 'none', borderRadius: 0, overflow: 'visible',
      background: 'transparent', ...style,
    }} {...rest}>
      {children}
    </div>
  );
}

/** A thin divider between list rows; pass `label` for a section heading. */
export function ListDivider({ label, style }) {
  if (label) {
    return (
      <div style={{ padding: '10px 12px 4px', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 11,
        letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--grey-70)', ...style }}>{label}</div>
    );
  }
  return <div style={{ height: 1, background: 'var(--grey-30)', margin: 0, ...style }} />;
}

/**
 * A single list row. Composable slots:
 *  - `icon`        leading glyph
 *  - `checkbox`    leading checkbox state ("checked" | "unchecked" | "indeterminate") + `onCheck`
 *  - `label` / `description`
 *  - `count`       trailing muted number (stats)
 *  - `switchOn`    trailing Switch (+ `onSwitch`)
 *  - `trailing`    arbitrary trailing node
 *  - `expandable` / `open` / `onToggle`  leading chevron for tree rows
 *  - `level`       indent depth (tree)
 *  - `active`, `onClick`
 */
export function ListItem({
  icon, checkbox, onCheck, label, description, count, switchOn, onSwitch, trailing,
  expandable = false, open = false, onToggle, level = 0, active = false, onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={(e) => { if (expandable && onToggle) onToggle(); onClick && onClick(e); }}
      style={{
        display: 'flex', alignItems: 'center', gap: 10, minHeight: 40, boxSizing: 'border-box',
        padding: '8px 12px', paddingLeft: 12 + level * 20,
        background: active ? (hover ? 'var(--brand-blue-20)' : 'var(--brand-blue-10)') : hover ? 'var(--grey-20)' : 'transparent',
        cursor: 'pointer', transition: 'background 100ms ease', borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-ui)', ...style,
      }}
      {...rest}
    >
      {expandable ? (
        <Icon name="ArrowRightSLine" size={16} style={{ flex: 'none', color: 'var(--grey-70)',
          transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 120ms ease' }} />
      ) : (level > 0 && <span style={{ flex: 'none', width: 16 }} />)}
      {checkbox && (
        <span onClick={(e) => e.stopPropagation()} style={{ flex: 'none', display: 'inline-flex' }}>
          <Checkbox state={checkbox} onChange={onCheck} />
        </span>
      )}
      {icon && <Icon name={icon} size={18} style={{ flex: 'none', color: active ? 'var(--brand-blue-70)' : 'var(--grey-80)' }} />}
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 14, fontWeight: active ? 600 : 500, color: active ? 'var(--brand-blue-70)' : 'var(--grey-90)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
        {description && <span style={{ fontSize: 12, color: 'var(--grey-70)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{description}</span>}
      </span>
      {count != null && (
        <span style={{ flex: 'none', fontSize: 13, fontWeight: 600, color: 'var(--grey-70)', fontVariantNumeric: 'tabular-nums' }}>{count}</span>
      )}
      {switchOn != null && (
        <span onClick={(e) => e.stopPropagation()} style={{ flex: 'none', display: 'inline-flex' }}>
          <Switch size="sm" checked={switchOn} onChange={onSwitch} />
        </span>
      )}
      {trailing && <span style={{ flex: 'none', display: 'inline-flex', alignItems: 'center' }}>{trailing}</span>}
    </div>
  );
}

/**
 * Data-driven collapsible tree (up to any depth). `nodes`: [{ id, label, icon?,
 * count?, children? }]. Rows with children get a chevron and expand/collapse.
 */
export function TreeList({ nodes = [], defaultOpen = [], bordered = false, selectable = false, selectedId, defaultSelectedId, onSelect, style }) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const [internalSel, setInternalSel] = React.useState(defaultSelectedId);
  const sel = selectedId !== undefined ? selectedId : internalSel;
  const toggle = (id) => setOpen((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const pick = (id) => { if (selectedId === undefined) setInternalSel(id); onSelect && onSelect(id); };

  const render = (list, level) => list.flatMap((node) => {
    const hasKids = node.children && node.children.length > 0;
    const isOpen = open.has(node.id);
    const row = (
      <ListItem
        key={node.id}
        level={level}
        icon={node.icon}
        label={node.label}
        count={node.count}
        expandable={hasKids}
        open={isOpen}
        active={!hasKids && (selectable || onSelect) ? sel === node.id : false}
        onToggle={() => hasKids && toggle(node.id)}
        onClick={hasKids ? undefined : () => pick(node.id)}
      />
    );
    return hasKids && isOpen ? [row, ...render(node.children, level + 1)] : [row];
  });

  return <List bordered={bordered} style={style}>{render(nodes, 0)}</List>;
}

export default List;
