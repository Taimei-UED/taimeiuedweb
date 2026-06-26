The shared floating menu surface behind the Drop-down button and the Select field — a hairline-bordered card with `--shadow-pop`, used wherever a list of actions or options floats over the UI.

```jsx
<PopoverMenu
  trigger={<Button chevron>Actions</Button>}
  items={[
    { label: 'Edit', icon: 'EditLine' },
    { label: 'Duplicate', icon: 'FileAddFill', shortcut: '⌘D' },
    { divider: true },
    { label: 'Delete', icon: 'DeleteBinLine', danger: true },
  ]}
  onSelect={(v) => console.log(v)}
/>
```

Items support `icon`, `shortcut`, `danger` (red), `disabled`, `selected` (brand-blue + check), and `{ divider: true }`. Closes on outside-click or Escape. `align="right"` right-aligns the menu; `width` sets min-width. The `MenuItem` row is also exported for hand-built menus.
