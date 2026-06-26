import * as React from 'react';
import { IconName } from '../../assets/icons/Icon';

/**
 * Primary action button — Wiz iDM.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. Default "primary". */
  variant?: 'primary' | 'normal' | 'text';
  /** Height preset. Default "md". */
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon from the Wiz icon set (e.g. "Sparkling2Fill"). */
  icon?: IconName;
  /** Show a trailing dropdown chevron. */
  chevron?: boolean;
  /** Show a spinner and block interaction. */
  loading?: boolean;
  disabled?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
export default Button;
