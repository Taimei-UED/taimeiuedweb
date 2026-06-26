import * as React from 'react';
/** Circular avatar (image or initial) — Wiz iDM. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
  src?: string;
  size?: number;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
export default Avatar;
