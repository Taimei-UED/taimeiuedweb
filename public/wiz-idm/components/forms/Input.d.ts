import * as React from 'react';
/**
 * Single-line text input — Wiz iDM.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: React.ReactNode;
  required?: boolean;
  error?: React.ReactNode;
  /** Height preset — "sm" = 28px, "md" = 36px (default). */
  size?: 'sm' | 'md';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export declare function Input(props: InputProps): JSX.Element;
export default Input;
