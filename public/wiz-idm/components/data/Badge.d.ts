import * as React from 'react';
/**
 * Status badge / tag — Wiz iDM.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'purple' | 'blue' | 'green' | 'red' | 'yellow' | 'grey';
  variant?: 'soft' | 'solid' | 'outline' | 'dot';
}
export declare function Badge(props: BadgeProps): JSX.Element;
export default Badge;
