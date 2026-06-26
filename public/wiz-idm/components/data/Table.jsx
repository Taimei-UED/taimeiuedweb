import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';

/** Normalise a cell value for sort/filter comparison (objects expose .label). */
const cmpVal = (v) => (v && typeof v === 'object' ? (v.label ?? '') : v);

/** Single-line text cell that truncates with an ellipsis and reveals the full
 *  text in a floating pop-over on hover when it overflows. */
function TextCell({ children }) {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef(null);
  const onEnter = () => { const el = ref.current; if (el && el.scrollWidth > el.clientWidth + 1) setShow(true); };
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      <span ref={ref} onMouseEnter={onEnter} onMouseLeave={() => setShow(false)}
        style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {children}
      </span>
      {show && (
        <span style={{
          position: 'absolute', top: '100%', left: 0, marginTop: 4, zIndex: 60, maxWidth: 320, width: 'max-content',
          background: 'var(--grey-90)', color: 'var(--white)', padding: '6px 10px', borderRadius: 'var(--radius-xs)',
          boxShadow: 'var(--shadow-pop)', fontFamily: 'var(--font-ui)', fontSize: 13, lineHeight: 1.4, whiteSpace: 'normal',
        }}>{children}</span>
      )}
    </span>
  );
}

/** Header sort toggle — none → asc → desc → none. Up arrow blue when asc,
 *  down arrow blue when desc (no rotation). Icon-button styled. */
function SortIcon({ dir, onClick }) {
  const [hover, setHover] = React.useState(false);
  const up = dir === 'desc' ? 'var(--brand-blue-70)' : 'var(--grey-70)';
  const down = dir === 'asc' ? 'var(--brand-blue-70)' : 'var(--grey-70)';
  return (
    <span onClick={(e) => { e.stopPropagation(); onClick(); }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24,
        borderRadius: 'var(--radius-xs)', cursor: 'pointer', flex: 'none',
        background: hover ? 'rgba(0,0,0,0.08)' : 'transparent', transition: 'background 120ms ease' }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ display: 'block' }}>
        <path d="M4.75 12.5 V3.5 M2.25 6 L4.75 3.5 L7.25 6" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: up }} />
        <path d="M11.25 3.5 V12.5 M8.75 10 L11.25 12.5 L13.75 10" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: down }} />
      </svg>
    </span>
  );
}

/** Header filter — opens a checkbox popover of the column's distinct values. */
function FilterControl({ values, selected, onChange }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const active = selected.size > 0 && selected.size < values.length;
  const [hover, setHover] = React.useState(false);
  const toggle = (v) => {
    const n = new Set(selected);
    n.has(v) ? n.delete(v) : n.add(v);
    onChange(n);
  };
  return (
    <span ref={ref} style={{ position: 'relative', display: 'inline-flex' }}>
      <span onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24,
          borderRadius: 'var(--radius-xs)', cursor: 'pointer', flex: 'none',
          background: open || hover ? 'rgba(0,0,0,0.08)' : 'transparent', transition: 'background 120ms ease' }}>
        <Icon name="Filter3Line" size={16} style={{ color: active ? 'var(--brand-blue-70)' : 'var(--grey-70)' }} />
      </span>
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, marginTop: 6, zIndex: 50, minWidth: 160, width: 'max-content', maxWidth: 300,
          background: 'var(--surface-card)', border: '1px solid var(--grey-40)',
          borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-pop)', padding: 6,
          display: 'flex', flexDirection: 'column', gap: 2,
        }}>
          <button type="button" onClick={() => onChange(new Set())}
            style={{ textAlign: 'left', padding: '6px 8px', border: 'none', background: 'transparent', cursor: 'pointer',
              fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--brand-blue-70)', borderRadius: 'var(--radius-xs)' }}>
            Clear filter
          </button>
          {values.map((v) => (
            <label key={v} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px', cursor: 'pointer', borderRadius: 'var(--radius-xs)' }}>
              <Checkbox state={selected.size === 0 || selected.has(v) ? 'checked' : 'unchecked'} onChange={() => toggle(v)} />
              <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--grey-90)' }}>{v}</span>
            </label>
          ))}
        </div>
      )}
    </span>
  );
}

/**
 * Data table. `columns`: [{ key, header, render?, width?, sortable?, filterable?, align? }].
 * `rows`: array of record objects. `selectable` adds a leading checkbox column.
 * Sortable headers cycle none → asc → desc on click; filterable headers open a
 * checkbox popover of distinct values. Object cell values sort/filter by `.label`.
 * Column borders are draggable to resize each column's width.
 * `paginated` adds a Rows-per-page / range / prev-next footer.
 */
export function Table({ columns = [], rows = [], selectable = false, striped = true,
  paginated = false, pageSize: initialPageSize = 5, pageSizeOptions = [5, 10, 20], style, ...rest }) {
  const [selected, setSelected] = React.useState(() => new Set());
  const [sort, setSort] = React.useState({ key: null, dir: null });
  const [filters, setFilters] = React.useState({}); // key -> Set of allowed labels
  const [hoverRow, setHoverRow] = React.useState(null);
  const [pageSize, setPageSize] = React.useState(initialPageSize);
  const [page, setPage] = React.useState(0);

  // distinct values per filterable column
  const distinct = React.useMemo(() => {
    const m = {};
    columns.forEach((c) => {
      if (c.filterable) {
        const seen = [];
        rows.forEach((r) => { const v = String(cmpVal(r[c.key])); if (!seen.includes(v)) seen.push(v); });
        m[c.key] = seen;
      }
    });
    return m;
  }, [columns, rows]);

  // apply filters then sort
  const viewRows = React.useMemo(() => {
    let out = rows.map((r, i) => ({ r, i }));
    Object.entries(filters).forEach(([key, set]) => {
      if (set && set.size > 0) out = out.filter(({ r }) => set.has(String(cmpVal(r[key]))));
    });
    if (sort.key && sort.dir) {
      out = [...out].sort((a, b) => {
        const av = cmpVal(a.r[sort.key]), bv = cmpVal(b.r[sort.key]);
        const c = av < bv ? -1 : av > bv ? 1 : 0;
        return sort.dir === 'asc' ? c : -c;
      });
    }
    return out;
  }, [rows, filters, sort]);

  const cycleSort = (key) => setSort((s) =>
    s.key !== key ? { key, dir: 'asc' } : s.dir === 'asc' ? { key, dir: 'desc' } : { key: null, dir: null });

  const allOn = viewRows.length > 0 && viewRows.every(({ i }) => selected.has(i));
  const toggleAll = () => setSelected(allOn ? new Set() : new Set(viewRows.map(({ i }) => i)));
  const toggle = (i) => setSelected((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });

  const cell = { padding: '0 8px', height: 32, fontFamily: 'var(--font-ui)', fontSize: 14, textAlign: 'left', verticalAlign: 'middle' };
  const bodyCell = { ...cell, height: 32 };

  // ── column resize ──
  const [widths, setWidths] = React.useState({});
  const headRefs = React.useRef({});
  const measured = Object.keys(widths).length > 0;
  React.useLayoutEffect(() => {
    if (measured) return;
    const init = {};
    if (selectable) init.__sel = 44;
    columns.forEach((c) => { const el = headRefs.current[c.key]; if (el) init[c.key] = Math.round(el.getBoundingClientRect().width); });
    if (Object.keys(init).length) setWidths(init);
  }, []);
  const startResize = (key, e) => {
    e.preventDefault(); e.stopPropagation();
    const startX = e.clientX; const startW = widths[key] || (headRefs.current[key]?.getBoundingClientRect().width ?? 120);
    const move = (ev) => { const w = Math.max(64, startW + (ev.clientX - startX)); setWidths((p) => ({ ...p, [key]: w })); };
    const up = () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); document.body.style.cursor = ''; document.body.style.userSelect = ''; };
    document.body.style.cursor = 'col-resize'; document.body.style.userSelect = 'none';
    document.addEventListener('mousemove', move); document.addEventListener('mouseup', up);
  };
  const ResizeHandle = ({ k }) => {
    const [h, setH] = React.useState(false);
    return (
      <span onMouseDown={(e) => startResize(k, e)}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          position: 'absolute', top: 0, right: -3, width: 8, height: '100%', cursor: 'col-resize', zIndex: 2,
          display: 'flex', justifyContent: 'center',
        }}>
        <span style={{ width: h ? 2 : 1, height: '100%', background: h ? 'var(--brand-blue-70)' : 'var(--grey-40)', transition: 'background 120ms ease, width 120ms ease' }} />
      </span>
    );
  };

  const total = viewRows.length;
  const pageCount = paginated ? Math.max(1, Math.ceil(total / pageSize)) : 1;
  const curPage = Math.min(page, pageCount - 1);
  const pageRows = paginated ? viewRows.slice(curPage * pageSize, curPage * pageSize + pageSize) : viewRows;
  const rangeStart = total === 0 ? 0 : curPage * pageSize + 1;
  const rangeEnd = paginated ? Math.min(total, (curPage + 1) * pageSize) : total;
  const rad = '0px';

  const PageBtn = ({ dir, disabled, onClick }) => {
    const [h, setH] = React.useState(false);
    return (
      <span onClick={disabled ? undefined : onClick}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28,
          borderRadius: 'var(--radius-xs)', cursor: disabled ? 'not-allowed' : 'pointer', flex: 'none',
          transform: dir === 'prev' ? 'rotate(90deg)' : 'rotate(-90deg)',
          background: h && !disabled ? 'rgba(0,0,0,0.08)' : 'transparent', transition: 'background 120ms ease' }}>
        <Icon name="ArrowDownSLine" size={18} style={{ color: disabled ? 'var(--grey-50)' : 'var(--grey-80)' }} />
      </span>
    );
  };
  return (
    <div style={{ overflow: 'visible', ...style }} {...rest}>
      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: measured ? 'fixed' : 'auto' }}>
        <colgroup>
          {selectable && <col style={{ width: widths.__sel || 44 }} />}
          {columns.map((c) => <col key={c.key} style={{ width: widths[c.key] }} />)}
        </colgroup>
        <thead>
          <tr style={{ background: 'var(--grey-20)', borderBottom: '1px solid var(--grey-40)' }}>
            {selectable && (
              <th style={{ ...cell, width: 44, paddingRight: 0, borderTopLeftRadius: rad }}>
                <Checkbox state={allOn ? 'checked' : selected.size ? 'indeterminate' : 'unchecked'} onChange={toggleAll} />
              </th>
            )}
            {columns.map((c, ci) => (
              <th key={c.key} ref={(el) => (headRefs.current[c.key] = el)}
                style={{ ...cell, position: 'relative', width: widths[c.key] ?? c.width, textAlign: c.align || 'left', color: 'var(--grey-90)', fontWeight: 600,
                  borderTopLeftRadius: !selectable && ci === 0 ? rad : 0,
                  borderTopRightRadius: ci === columns.length - 1 ? rad : 0 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, width: '100%', overflow: 'visible' }}>
                  <span style={{ flex: 1, minWidth: 0 }}><TextCell>{c.header}</TextCell></span>
                  {c.sortable && <SortIcon dir={sort.key === c.key ? sort.dir : null} onClick={() => cycleSort(c.key)} />}
                  {c.filterable && (
                    <FilterControl
                      values={distinct[c.key] || []}
                      selected={filters[c.key] || new Set()}
                      onChange={(set) => setFilters((f) => ({ ...f, [c.key]: set }))}
                    />
                  )}
                </span>
                {ci < columns.length - 1 && <ResizeHandle k={c.key} />}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageRows.map(({ r: row, i: ri }, vi) => {
            const hovered = hoverRow === ri;
            const isSel = selectable && selected.has(ri);
            const lastRow = !paginated && vi === pageRows.length - 1;
            return (
            <tr key={ri}
              onMouseEnter={() => setHoverRow(ri)} onMouseLeave={() => setHoverRow(null)}
              style={{
              background: isSel ? 'var(--brand-blue-20)' : hovered ? 'var(--grey-20)' : 'var(--white)',
              borderBottom: vi === pageRows.length - 1 ? 'none' : '1px solid var(--grey-30)',
              transition: 'background 100ms ease',
            }}>
              {selectable && (
                <td style={{ ...bodyCell, paddingRight: 0, borderBottomLeftRadius: lastRow ? rad : 0 }}>
                  <Checkbox state={selected.has(ri) ? 'checked' : 'unchecked'} onChange={() => toggle(ri)} />
                </td>
              )}
              {columns.map((c, ci) => (
                <td key={c.key} style={{ ...bodyCell, textAlign: c.align || 'left', color: 'var(--grey-90)',
                  borderBottomLeftRadius: lastRow && !selectable && ci === 0 ? rad : 0,
                  borderBottomRightRadius: lastRow && ci === columns.length - 1 ? rad : 0 }}>
                  {c.render ? c.render(row[c.key], row, ri) : <TextCell>{row[c.key]}</TextCell>}
                </td>
              ))}
            </tr>
            );
          })}
        </tbody>
      </table>
      {paginated && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 20,
          padding: '8px 12px', borderTop: '1px solid var(--grey-40)', background: 'var(--surface-card)',
          borderBottomLeftRadius: rad, borderBottomRightRadius: rad,
          fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--grey-80)',
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            Rows per page:
            <Select size="sm" value={String(pageSize)} options={pageSizeOptions.map(String)}
              onChange={(v) => { setPageSize(Number(v)); setPage(0); }} style={{ width: 76 }} />
          </span>
          <span style={{ minWidth: 90, textAlign: 'center' }}>{rangeStart}–{rangeEnd} of {total}</span>
          <span style={{ display: 'flex', gap: 4 }}>
            <PageBtn dir="prev" disabled={curPage === 0} onClick={() => setPage((p) => Math.max(0, p - 1))} />
            <PageBtn dir="next" disabled={curPage >= pageCount - 1} onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))} />
          </span>
        </div>
      )}
    </div>
  );
}

export default Table;
