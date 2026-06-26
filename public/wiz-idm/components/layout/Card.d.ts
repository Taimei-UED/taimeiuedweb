import * as React from 'react';
/**
 * Surface container card — Wiz iDM.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'ring' | 'card' | 'flat';
  padding?: number;
  radius?: number;
}
export declare function Card(props: CardProps): JSX.Element;
export default Card;
