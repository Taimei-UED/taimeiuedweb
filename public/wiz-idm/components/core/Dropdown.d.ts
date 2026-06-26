import * as React from 'react';
import { IconName } from '../../assets/icons/Icon';

export interface DropdownItem {
  label?: React.ReactNode;
  value?: string;
  icon?: IconName;
  shortcut?: string;
  danger?: boolean;
  disabled?: boolean;
  divider?: boolean;
}

/**
 * Drop-down button — a Button with a trailing chevron that opens a menu.
 */
export interface DropdownProps {
  /** Button label. */
  label?: React.ReactNode;
  /** Underlying Button variant. Default "normal". */
  variant?: 'primary' | 'normal' | 'text';
  /** Button size. Default "md". */
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon on the button. */
  icon?: IconName;
  /** Menu items. Use `{ divider: true }` for a separator. */
  items: DropdownItem[];
  /** Fired with (value ?? label, item) when an item is chosen. */
  onSelect?: (value: string, item: DropdownItem) => void;
  /** Menu alignment to the button. Default "left". */
  align?: 'left' | 'right';
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Dropdown(props: DropdownProps): JSX.Element;
export default Dropdown;
