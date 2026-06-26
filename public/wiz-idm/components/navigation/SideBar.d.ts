import * as React from 'react';
import { IconName } from '../../assets/icons/Icon';
export interface NavItem { icon?: IconName; label: string; value?: string; onClick?: () => void; }
/** Single nav row — Wiz iDM. */
export interface SideBarItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  icon?: IconName;
  label?: string;
  active?: boolean;
  collapsed?: boolean;
}
/**
 * Left navigation rail (collapsible) — Wiz iDM.
 */
export interface SideBarProps extends React.HTMLAttributes<HTMLElement> {
  items: NavItem[];
  value?: string;
  onSelect?: (value: string) => void;
  collapsed?: boolean;
  onToggle?: () => void;
  footerItems?: NavItem[];
  user?: { name: string; email: string };
}
export declare function SideBarItem(props: SideBarItemProps): JSX.Element;
export declare function SideBar(props: SideBarProps): JSX.Element;
export default SideBar;
