import * as React from 'react';
import { IconName } from '../../assets/icons/Icon';

export interface PopoverMenuItem {
  label?: React.ReactNode;
  value?: string;
  icon?: IconName;
  shortcut?: string;
  danger?: boolean;
  disabled?: boolean;
  selected?: boolean;
  divider?: boolean;
  onClick?: () => void;
}

/**
 * Pop-over menu — the shared floating menu used by Drop-down button and Select.
 */
export interface PopoverMenuProps {
  /** The element that opens the menu when clicked. */
  trigger: React.ReactNode;
  items: PopoverMenuItem[];
  onSelect?: (value: string, item: PopoverMenuItem) => void;
  align?: 'left' | 'right';
  width?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  style?: React.CSSProperties;
}
export declare function PopoverMenu(props: PopoverMenuProps): JSX.Element;
export declare function MenuItem(props: { item: PopoverMenuItem; onClick?: () => void }): JSX.Element;
export default PopoverMenu;
