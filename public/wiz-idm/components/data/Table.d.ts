import * as React from 'react';
export interface Column {
  key: string;
  header: React.ReactNode;
  render?: (value: any, row: any, index: number) => React.ReactNode;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  filterable?: boolean;
}
/**
 * Data table with sortable/filterable headers and row selection — Wiz iDM.
 */
export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: Column[];
  rows: Record<string, any>[];
  selectable?: boolean;
  striped?: boolean;
  /** Show a Rows-per-page / range / prev-next pagination footer. */
  paginated?: boolean;
  /** Initial rows per page (default 5). */
  pageSize?: number;
  /** Options offered in the Rows-per-page selector (default [5,10,20]). */
  pageSizeOptions?: number[];
}
export declare function Table(props: TableProps): JSX.Element;
export default Table;
