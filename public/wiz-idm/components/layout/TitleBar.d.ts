import * as React from 'react';
/** Section title bar with right-aligned actions — Wiz iDM. */
export interface TitleBarProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  /** Draw a bottom hairline divider. */
  divider?: boolean;
}
export declare function TitleBar(props: TitleBarProps): JSX.Element;
export default TitleBar;
