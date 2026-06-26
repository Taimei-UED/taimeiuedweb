import * as React from 'react';
/** Rounded search field with leading glyph — Wiz iDM. */
export interface SearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'width'> {
  width?: number | string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Fired when the trailing search icon-button is clicked. */
  onSearch?: () => void;
}
export declare function Search(props: SearchProps): JSX.Element;
export default Search;
