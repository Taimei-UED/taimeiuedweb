import * as React from 'react';
/**
 * Top application bar — window chrome, Wiz logo, centered project selector — Wiz iDM.
 */
export interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  platform?: 'mac' | 'windows';
  project?: string;
  onProjectClick?: () => void;
  right?: React.ReactNode;
}
export declare function TopNav(props: TopNavProps): JSX.Element;
export default TopNav;
