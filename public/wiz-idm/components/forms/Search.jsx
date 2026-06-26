import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

/** Rounded search field with a trailing search icon-button. `onSearch` fires on click. */
export function Search({
  placeholder = 'Search protocol name, ID, etc.', value, defaultValue, onChange, onSearch,
  disabled = false, width = 320, style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4, width, boxSizing: 'border-box',
      height: 36, padding: '0 4px 0 12px',
      background: disabled ? 'var(--grey-20)' : 'var(--white)',
      border: `1px solid ${focus ? 'var(--brand-blue-70)' : 'var(--grey-50)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? '0 0 0 3px var(--brand-blue-10)' : 'none',
      transition: 'border-color 120ms ease, box-shadow 120ms ease', ...style,
    }}>
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
          fontFamily: 'var(--font-ui)', fontSize: 14, color: 'var(--grey-90)',
        }}
        {...rest}
      />
      <IconButton icon="SearchLine" variant="ghost" size="sm" disabled={disabled} onClick={onSearch} style={{ flex: 'none' }} />
    </span>
  );
}

export default Search;
