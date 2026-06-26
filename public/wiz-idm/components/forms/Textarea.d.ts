import * as React from 'react';
/** Multi-line text input — Wiz iDM. */
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: React.ReactNode;
  required?: boolean;
  error?: React.ReactNode;
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
export default Textarea;
