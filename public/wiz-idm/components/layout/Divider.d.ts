import * as React from 'react';
/** Divider — horizontal (optional label) or vertical — Wiz iDM. */
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  align?: 'left' | 'center' | 'right';
}
export declare function Divider(props: DividerProps): JSX.Element;
export default Divider;
