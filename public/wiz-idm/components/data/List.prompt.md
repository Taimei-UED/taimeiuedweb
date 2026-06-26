Vertical list rows for navigation, settings, file trees, and checklists. Compose `ListItem` slots, or use the data-driven `TreeList` for collapsible hierarchies.

```jsx
<List bordered>
  <ListDivider label="Forms" />
  <ListItem icon="RemixIconsLineDocumentFile" label="AE log" count={12} />
  <ListItem checkbox="checked" label="Reviewed" onCheck={fn} />
  <ListItem icon="Sparkling2Line" label="Auto-check" switchOn={on} onSwitch={setOn} />
</List>

<TreeList defaultOpen={['root']} nodes={[
  { id:'root', label:'Study', icon:'RemixIconsLineDocumentFolder', children:[
    { id:'v1', label:'Visit 1', children:[{ id:'f1', label:'Vitals' }] },
  ]},
]} />
```

`ListItem` slots: `icon`, `checkbox`+`onCheck`, `label`/`description`, `count` (trailing stat), `switchOn`+`onSwitch`, `trailing` (any node), `expandable`/`open`/`onToggle` + `level` for trees, `active`. `ListDivider` is a hairline or, with `label`, an uppercase section heading.
