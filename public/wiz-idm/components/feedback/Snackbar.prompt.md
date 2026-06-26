Dark floating toast for transient feedback (saves, undo, sync status). Distinct from the inline `Message` banner — Snackbar floats over content on a solid dark surface.

```jsx
<Snackbar tone="success" action="Undo" onAction={fn} onClose={fn}>
  Query resolved
</Snackbar>
```

`tone` sets the leading glyph color (info/success/warning/error). Optional trailing text `action` (or `actionLabel`+`onAction`) and a close button. Keep messages to one short line.
