import * as React from 'react';
type Item = string | { value: string; label: React.ReactNode };
/** Tabs — segmented / pill / underline — Wiz iDM. */
export interface TabsProps {
  items: Item[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: 'segmented' | 'pill' | 'underline';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
export default Tabs;
