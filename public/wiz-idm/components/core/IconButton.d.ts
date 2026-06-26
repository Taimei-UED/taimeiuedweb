import * as React from 'react';
import { IconName } from '../../assets/icons/Icon';

/** Square icon-only button — Wiz iDM. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon-set name. Default "Home5Line". */
  icon?: IconName;
  /** Default "ghost". */
  variant?: 'ghost' | 'filled' | 'primary';
  /** Default "md". */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
export default IconButton;
