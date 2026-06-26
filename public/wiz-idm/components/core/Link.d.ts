import * as React from 'react';
/** Inline text link in brand blue — Wiz iDM. */
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
}
export declare function Link(props: LinkProps): JSX.Element;
export default Link;
