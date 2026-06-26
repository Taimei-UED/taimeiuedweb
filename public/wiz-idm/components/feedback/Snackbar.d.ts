import * as React from 'react';
/** Snackbar — dark floating toast for transient feedback — Wiz iDM. */
export interface SnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'info' | 'success' | 'warning' | 'error' | 'loading';
  /** "dark" (default) or "filled" (tone-colored background, white content). */
  variant?: 'dark' | 'filled';
  /** Bold title line (use with `description` for a two-line snackbar). */
  title?: React.ReactNode;
  /** Secondary line below the title. */
  description?: React.ReactNode;
  /** Button rendered below the content (e.g. "Got it"). */
  footerAction?: React.ReactNode;
  onFooterAction?: () => void;
  /** Trailing text action label (e.g. "Undo"). Pass `action` or rely on actionLabel + onAction. */
  action?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  closable?: boolean;
  onClose?: () => void;
}
export declare function Snackbar(props: SnackbarProps): JSX.Element;
export default Snackbar;
