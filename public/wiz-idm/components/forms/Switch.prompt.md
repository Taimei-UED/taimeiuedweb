Toggle switch for binary on/off settings. Controlled (`checked` + `onChange`) or uncontrolled (`defaultChecked`).

```jsx
<Switch defaultChecked label="Enable auto-check" />
<Switch size="sm" checked={on} onChange={setOn} />
<Switch disabled checked label="Locked" />
```

Brand-blue track when on, grey when off; `sm` (32×18) and `md` (40×22) sizes. Optional `label` sits to the right.
