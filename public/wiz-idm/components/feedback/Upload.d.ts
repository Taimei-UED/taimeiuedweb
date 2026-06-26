import * as React from 'react';
/**
 * File upload dropzone + uploaded-file chip — Wiz iDM.
 */
export interface UploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  hint?: string;
  /** Accepted file types for the native picker. Default ".docx,.xlsx". */
  accept?: string;
  /** Allow selecting multiple files. Default true. */
  multiple?: boolean;
  /** Render chosen-file chips below the zone. Default true. */
  showFiles?: boolean;
  /** Controlled list of file names. */
  files?: string[];
  /** Fires with the next file-name list on add/remove. */
  onFilesChange?: (files: string[]) => void;
  /** Override the click behaviour entirely (skips the native picker). */
  onBrowse?: () => void;
}
export interface FileChipProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  onRemove?: () => void;
}
export declare function Upload(props: UploadProps): JSX.Element;
export declare function FileChip(props: FileChipProps): JSX.Element;
export default Upload;
