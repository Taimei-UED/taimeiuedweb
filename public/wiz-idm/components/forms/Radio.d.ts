import * as React from 'react';
/** Radio control — Wiz iDM. */
export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  onChange?: () => void;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
export default Radio;
