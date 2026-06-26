# Wiz iDM — UI kit

High-fidelity, click-through recreation of the **Wiz | iDM** clinical
data-management desktop app (Taimei). Composes the design-system primitives
from the bundle — it does not re-implement them.

- `index.html` — app shell (TopNav + collapsible SideBar + main). Switch
  screens from the left rail; the SideBar collapse toggle works.
- `screens.jsx` — `HomeScreen`, `ManualCheckScreen`, `VerificationScreen`
  exported on `window`.

Screens
- **Home** — search, primary action, summary stat cards, recent-protocol table.
- **Manual Check** — title bar with actions, a Steps progress strip, a warning
  Message, underline tabs (DVP / eCRF / Queries) and a selectable query table.
- **DVP / Verification** — Steps, drag-and-drop Upload with file chips, a small
  form and a Confirm modal.

All clinical content (protocol IDs, SDTM field names, query items) is sample
data for layout only.
