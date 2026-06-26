Drop-down button — a Button with a trailing chevron that opens a menu of actions.

```jsx
<Dropdown
  label="Actions"
  variant="normal"
  items={[
    { label: 'Edit', icon: 'EditLine' },
    { label: 'Duplicate', icon: 'FileAddFill' },
    { divider: true },
    { label: 'Delete', icon: 'DeleteBinLine', danger: true },
  ]}
  onSelect={(v) => console.log(v)}
/>
```

Items support `icon`, `shortcut`, `danger` (red), `disabled`, and `{ divider: true }`. The menu closes on outside-click or Escape. Use `align="right"` to right-align the menu under the button.
