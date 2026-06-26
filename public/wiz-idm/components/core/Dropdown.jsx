import React from 'react';
import { Button } from './Button.jsx';
import { PopoverMenu } from './PopoverMenu.jsx';

/**
 * Drop-down button. Renders a Button with a trailing chevron; clicking it
 * opens a PopoverMenu of `items`. Each item: { label, icon?, value?, danger?,
 * disabled?, divider? }. `onSelect(value|label, item)` fires on choose.
 */
export function Dropdown({
  label = 'Actions', variant = 'normal', size = 'md', icon, items = [],
  onSelect, align = 'left', disabled = false, style, ...rest
}) {
  return (
    <PopoverMenu
      items={items}
      onSelect={onSelect}
      align={align}
      width={180}
      style={style}
      trigger={
        <Button variant={variant} size={size} icon={icon} chevron disabled={disabled}>
          {label}
        </Button>
      }
      {...rest}
    />
  );
}

export default Dropdown;
