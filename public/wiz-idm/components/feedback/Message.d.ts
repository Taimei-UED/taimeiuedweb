import * as React from 'react';
/** Inline message / alert banner — Wiz iDM. */
export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'warning' | 'error' | 'success' | 'info';
  closable?: boolean;
  onClose?: () => void;
}
export declare function Message(props: MessageProps): JSX.Element;
export default Message;
