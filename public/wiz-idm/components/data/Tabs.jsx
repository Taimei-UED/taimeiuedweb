import React from 'react';

/**
 * Tabs. `variant`:
 *  - "segmented" → grey track, white selected pill (Tabs)
 *  - "pill"      → standalone pills, soft-blue selected (Tab Items / Style A)
 *  - "underline" → text row, blue underline on selected (Tab Items / Style B)
 */
export function Tabs({ items = [], value, defaultValue, onChange, variant = 'segmented', style, ...rest }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && (items[0].value ?? items[0])));
  const current = value !== undefined ? value : internal;
  const norm = items.map((it) => (typeof it === 'string' ? { value: it, label: it } : it));
  const select = (v) => { if (value === undefined) setInternal(v); onChange && onChange(v); };

  if (variant === 'underline') {
    return <UnderlineTabs norm={norm} current={current} select={select} style={style} {...rest} />;
  }

  if (variant === 'pill') {
    return (
      <div style={{ display: 'flex', width: 'fit-content', gap: 8, ...style }} {...rest}>
        {norm.map((it) => {
          const on = it.value === current;
          return (
            <button key={it.value} type="button" onClick={() => select(it.value)} style={{
              appearance: 'none', cursor: 'pointer', padding: '7px 14px',
              fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13,
              color: on ? 'var(--brand-blue-70)' : 'var(--grey-80)',
              background: on ? 'var(--brand-blue-10)' : 'transparent',
              border: `1px solid ${on ? 'var(--brand-blue-30)' : 'var(--grey-40)'}`,
              borderRadius: 'var(--radius-sm)',
            }}>{it.label}</button>
          );
        })}
      </div>
    );
  }

  // segmented — single white pill that slides to the active tab
  return <SegmentedTabs norm={norm} current={current} select={select} style={style} {...rest} />;
}

function UnderlineTabs({ norm, current, select, style, ...rest }) {
  const tabRefs = React.useRef({});
  const [bar, setBar] = React.useState({ left: 0, width: 0, ready: false });
  const [hoverKey, setHoverKey] = React.useState(null);

  React.useLayoutEffect(() => {
    const el = tabRefs.current[current];
    if (el) setBar({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
  }, [current, norm.length]);

  return (
    <div style={{ position: 'relative', display: 'flex', gap: 24, borderBottom: '1px solid var(--grey-40)', ...style }} {...rest}>
      <span aria-hidden style={{
        position: 'absolute', bottom: -1, left: bar.left, width: bar.width, height: 2,
        background: 'var(--brand-blue-70)', borderRadius: 1, opacity: bar.ready ? 1 : 0,
        transition: 'left 220ms cubic-bezier(.4,0,.2,1), width 220ms cubic-bezier(.4,0,.2,1)',
        pointerEvents: 'none',
      }} />
      {norm.map((it) => {
        const on = it.value === current;
        const hover = hoverKey === it.value && !on;
        return (
          <button key={it.value} type="button" ref={(el) => (tabRefs.current[it.value] = el)}
            onClick={() => select(it.value)}
            onMouseEnter={() => setHoverKey(it.value)} onMouseLeave={() => setHoverKey(null)}
            style={{
              appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 2px',
              fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13,
              color: on ? 'var(--brand-blue-70)' : hover ? 'var(--grey-90)' : 'var(--grey-80)',
              transition: 'color 160ms ease',
            }}>{it.label}</button>
        );
      })}
    </div>
  );
}

function SegmentedTabs({ norm, current, select, style, ...rest }) {
  const wrapRef = React.useRef(null);
  const tabRefs = React.useRef({});
  const [pill, setPill] = React.useState({ left: 4, width: 0, ready: false });
  const [hoverKey, setHoverKey] = React.useState(null);

  React.useLayoutEffect(() => {
    const el = tabRefs.current[current];
    const wrap = wrapRef.current;
    if (el && wrap) {
      setPill({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
    }
  }, [current, norm.length]);

  return (
    <div ref={wrapRef} style={{
      position: 'relative', display: 'inline-flex', width: 'fit-content', gap: 4, padding: 4,
      background: 'var(--grey-20)', borderRadius: 'var(--radius-md)', ...style,
    }} {...rest}>
      {/* sliding white pill */}
      <span aria-hidden style={{
        position: 'absolute', top: 4, left: pill.left, width: pill.width, height: 'calc(100% - 8px)',
        background: 'var(--white)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-card)',
        opacity: pill.ready ? 1 : 0,
        transition: 'left 220ms cubic-bezier(.4,0,.2,1), width 220ms cubic-bezier(.4,0,.2,1)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      {norm.map((it) => {
        const on = it.value === current;
        const hover = hoverKey === it.value && !on;
        return (
          <button key={it.value} type="button" ref={(el) => (tabRefs.current[it.value] = el)}
            onClick={() => select(it.value)}
            onMouseEnter={() => setHoverKey(it.value)} onMouseLeave={() => setHoverKey(null)}
            style={{
              position: 'relative', zIndex: 1, appearance: 'none', cursor: 'pointer',
              padding: '6px 16px', border: 'none', background: 'transparent',
              fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13,
              color: on ? 'var(--brand-blue-70)' : hover ? 'var(--grey-90)' : 'var(--grey-80)',
              borderRadius: 'var(--radius-sm)', transition: 'color 160ms ease',
            }}>{it.label}</button>
        );
      })}
    </div>
  );
}

export default Tabs;