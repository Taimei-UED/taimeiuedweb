import * as React from 'react';

/**
 * Wiz brand lockup — gradient mark, "Wiz" wordmark and product suffix.
 */
export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `full` = mark + wordmark + suffix; `mark` = gradient glyph only. */
  variant?: 'full' | 'mark';
  /** Product suffix after the divider. Pass '' to hide. Default "iDM". */
  suffix?: string;
  /** Pixel height of the mark/wordmark. Default 20. */
  height?: number;
}
export declare function Logo(props: LogoProps): JSX.Element;
export default Logo;
