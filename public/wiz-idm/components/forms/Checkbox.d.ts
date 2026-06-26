import * as React from 'react';
/** Checkbox — unchecked / checked / indeterminate — Wiz iDM. */
export interface CheckboxProps {
  state?: 'unchecked' | 'checked' | 'indeterminate';
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  /** Render the hover visual statically — for specimens. */
  forceHover?: boolean;
  label?: React.ReactNode;
  onChange?: () => void;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
export default Checkbox;
