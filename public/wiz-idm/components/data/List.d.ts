import * as React from 'react';
import { IconName } from '../../assets/icons/Icon';

/** List container — Wiz iDM. */
export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Wrap the list in a hairline card. */
  bordered?: boolean;
}
export declare function List(props: ListProps): JSX.Element;

/** Divider / section heading between list rows. */
export interface ListDividerProps {
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ListDivider(props: ListDividerProps): JSX.Element;

/** A single composable list row. */
export interface ListItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  icon?: IconName;
  /** Leading checkbox state; pair with onCheck. */
  checkbox?: 'checked' | 'unchecked' | 'indeterminate';
  onCheck?: () => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  /** Trailing muted number (stats). */
  count?: number | string;
  /** Trailing switch state; pair with onSwitch. */
  switchOn?: boolean;
  onSwitch?: (checked: boolean) => void;
  /** Arbitrary trailing node. */
  trailing?: React.ReactNode;
  /** Tree row with a leading chevron. */
  expandable?: boolean;
  open?: boolean;
  onToggle?: () => void;
  /** Indent depth for tree rows. */
  level?: number;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export declare function ListItem(props: ListItemProps): JSX.Element;

export interface TreeNode {
  id: string;
  label: React.ReactNode;
  icon?: IconName;
  count?: number | string;
  children?: TreeNode[];
}
/**
 * Data-driven collapsible tree built on ListItem — Wiz iDM.
 * @startingPoint section="Content" subtitle="Lists, trees, checklists & settings rows" viewport="728x360"
 */
export interface TreeListProps {
  nodes: TreeNode[];
  defaultOpen?: string[];
  bordered?: boolean;
  /** Enable row selection (active highlight). */
  selectable?: boolean;
  selectedId?: string;
  defaultSelectedId?: string;
  onSelect?: (id: string) => void;
  style?: React.CSSProperties;
}
export declare function TreeList(props: TreeListProps): JSX.Element;
export default List;
