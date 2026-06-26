import * as React from 'react';
/** Label + required mark + error wrapper for form controls — Wiz iDM. */
export interface FieldProps {
  label?: React.ReactNode;
  required?: boolean;
  error?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
export default Field;
