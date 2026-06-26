import * as React from 'react';
/**
 * Centered modal dialog — Wiz iDM.
 */
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: React.ReactNode;
  width?: number | string;
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  footer?: React.ReactNode;
}
export declare function Modal(props: ModalProps): JSX.Element | null;
export default Modal;
