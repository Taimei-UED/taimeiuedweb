import * as React from 'react';
type Opt = string | { value: string; label: string };
/** Select / dropdown — Wiz iDM. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: React.ReactNode;
  required?: boolean;
  error?: React.ReactNode;
  placeholder?: string;
  options?: Opt[];
  /** Height preset — "sm" = 28px, "md" = 36px (default). */
  size?: 'sm' | 'md';
  /** Allow multiple selections — chosen values render as removable chips. */
  multiple?: boolean;
  /** Let the user type in the selector to filter options. */
  searchable?: boolean;
  /** Single: (value, option). Multiple: (valuesArray). */
  onChange?: ((value: string, option: { value: string; label: string }) => void) | ((values: string[]) => void);
}
export declare function Select(props: SelectProps): JSX.Element;
export default Select;
