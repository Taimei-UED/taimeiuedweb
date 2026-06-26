import React from 'react';
import { Field } from './Field.jsx';
import { Icon } from '../../assets/icons/Icon.jsx';

/**
 * Select with a custom popover menu (matches the Dropdown button menu).
 * `options`: array of strings or {value,label}.
 *  - Single: `onChange(value, option)`.
 *  - `multiple`: chosen values render as removable chips; `onChange(valuesArray)`.
 *  - `searchable`: type in the selector to filter options (works with either mode).
 */
export function Select({
  label, required, error, disabled, placeholder = 'Select...', options = [], size = 'md',
  multiple = false, searchable = false, value, defaultValue, onChange, style, ...rest
}) {
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [internal, setInternal] = React.useState(defaultValue ?? (multiple ? [] : ''));
  const current = value !== undefined ? value : internal;
  const ref = React.useRef(null);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) { setQuery(''); return; }
    if (searchable && inputRef.current) inputRef.current.focus();
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onEsc);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onEsc); };
  }, [open, searchable]);

  // single
  const selected = opts.find((o) => o.value === current);
  const chooseSingle = (o) => {
    if (value === undefined) setInternal(o.value);
    setOpen(false); setQuery('');
    onChange && onChange(o.value, o);
  };
  // multi
  const selectedVals = multiple ? (Array.isArray(current) ? current : []) : [];
  const isOn = (v) => selectedVals.includes(v);
  const toggleMulti = (o) => {
    const next = isOn(o.value) ? selectedVals.filter((v) => v !== o.value) : [...selectedVals, o.value];
    if (value === undefined) setInternal(next);
    setQuery('');
    onChange && onChange(next);
  };
  const removeChip = (e, v) => {
    e.stopPropagation();
    const next = selectedVals.filter((x) => x !== v);
    if (value === undefined) setInternal(next);
    onChange && onChange(next);
  };
  const chipFor = (v) => opts.find((o) => o.value === v);

  const visible = searchable && query
    ? opts.filter((o) => String(o.label).toLowerCase().includes(query.toLowerCase()))
    : opts;

  const borderColor = error ? 'var(--signal-error)' : open ? 'var(--brand-blue-70)' : 'var(--grey-50)';
  const hasValue = multiple ? selectedVals.length > 0 : !!selected;

  const chrome = {
    width: '100%', boxSizing: 'border-box', minHeight: size === 'sm' ? 28 : 36,
    padding: multiple && hasValue ? '4px 36px 4px 6px' : size === 'sm' ? '0 32px 0 10px' : '0 36px 0 12px',
    display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4, textAlign: 'left',
    fontFamily: 'var(--font-ui)', fontSize: size === 'sm' ? 13 : 14,
    color: disabled ? 'var(--grey-60)' : hasValue ? 'var(--grey-90)' : 'var(--grey-50)',
    background: disabled ? 'var(--grey-20)' : 'var(--white)',
    border: `1px solid ${borderColor}`,
    borderRadius: 'var(--radius-sm)', outline: 'none',
    boxShadow: open && !error ? '0 0 0 3px var(--brand-blue-10)' : 'none',
    cursor: disabled ? 'not-allowed' : 'text',
    transition: 'border-color 120ms ease, box-shadow 120ms ease',
  };

  const chip = (v) => {
    const o = chipFor(v);
    return (
      <span key={v} style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        height: 24, padding: '0 4px 0 8px', borderRadius: 'var(--radius-xs)',
        background: 'var(--grey-30)', color: 'var(--grey-90)', fontSize: 13, fontWeight: 500,
      }}>
        {o ? o.label : v}
        <span onClick={disabled ? undefined : (e) => removeChip(e, v)} style={{ display: 'inline-flex', cursor: 'pointer', opacity: 0.75 }}>
          <Icon name="CloseLine" size={13} style={{ color: 'var(--grey-90)' }} />
        </span>
      </span>
    );
  };

  const searchInput = (
    <input
      ref={inputRef}
      type="text"
      value={query}
      placeholder={hasValue ? '' : placeholder}
      disabled={disabled}
      onChange={(e) => { setQuery(e.target.value); if (!open) setOpen(true); }}
      onFocus={() => setOpen(true)}
      style={{
        flex: 1, minWidth: 60, height: 26, border: 'none', outline: 'none', background: 'transparent',
        fontFamily: 'var(--font-ui)', fontSize: 14, color: 'var(--grey-90)', padding: multiple ? '0 4px' : 0,
      }}
    />
  );

  // Trigger: searchable uses an editable container; otherwise a button.
  const trigger = searchable ? (
    <div onClick={() => !disabled && setOpen(true)} style={chrome}>
      {multiple && selectedVals.map(chip)}
      {/* single-select: show selected label when not actively searching */}
      {!multiple && selected && !open && (
        <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--grey-90)' }}>{selected.label}</span>
      )}
      {(multiple || !selected || open) && searchInput}
    </div>
  ) : (
    <button type="button" disabled={disabled} onClick={() => setOpen((o) => !o)} style={chrome} {...rest}>
      {multiple
        ? (hasValue ? selectedVals.map(chip) : <span style={{ paddingLeft: 6 }}>{placeholder}</span>)
        : (selected
            ? <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{selected.label}</span>
            : placeholder)}
    </button>
  );

  const field = (
    <span ref={ref} style={{ position: 'relative', display: 'block' }}>
      {trigger}
      <Icon name="ArrowDownSLine" size={18} style={{
        position: 'absolute', right: 10, top: '50%',
        transform: `translateY(-50%) rotate(${open ? 180 : 0}deg)`, transition: 'transform 120ms ease',
        color: disabled ? 'var(--grey-50)' : 'var(--grey-70)', pointerEvents: 'none',
      }} />
      {open && !disabled && (
        <div role="listbox" style={{
          position: 'absolute', top: '100%', left: 0, minWidth: '100%', width: 'max-content', maxWidth: 300, marginTop: 6, zIndex: 50,
          background: 'var(--surface-card)', border: '1px solid var(--grey-40)',
          borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-pop)', padding: 4,
          display: 'flex', flexDirection: 'column', gap: 2, maxHeight: 240, overflowY: 'auto',
        }}>
          {visible.length === 0 && (
            <span style={{ padding: '8px 10px', fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--grey-60)' }}>No matches</span>
          )}
          {visible.map((o) => (
            <Option
              key={o.value}
              opt={o}
              selected={multiple ? isOn(o.value) : o.value === current}
              multiple={multiple}
              onClick={() => (multiple ? toggleMulti(o) : chooseSingle(o))}
            />
          ))}
        </div>
      )}
    </span>
  );
  if (!label && !error) return field;
  return <Field label={label} required={required} error={error} style={style}>{field}</Field>;
}

function Option({ opt, selected, multiple, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
        padding: '8px 10px', border: 'none', borderRadius: 'var(--radius-xs)',
        background: (selected && !multiple) || hover ? 'var(--grey-30)' : 'transparent',
        color: selected ? 'var(--brand-blue-70)' : 'var(--grey-90)',
        cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: selected ? 600 : 500, fontSize: 14,
        transition: 'background 100ms ease',
      }}
    >
      {multiple && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 16, height: 16, flex: 'none', boxSizing: 'border-box', borderRadius: 'var(--radius-xs)',
          background: selected ? 'var(--brand-blue-70)' : 'var(--white)',
          border: selected ? 'none' : '1px solid var(--grey-50)',
        }}>
          {selected && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6.2 L4.8 8.5 L9.5 3.5" stroke="var(--ink-on-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      )}
      <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{opt.label}</span>
      {selected && !multiple && <Icon name="CheckFill" size={16} style={{ color: 'var(--brand-blue-70)', flex: 'none' }} />}
    </button>
  );
}

export default Select;
