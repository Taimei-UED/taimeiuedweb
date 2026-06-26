import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

/**
 * Drag-and-drop file upload zone. Clicking (or dropping) opens the native file
 * picker; chosen files are listed as chips below. Uncontrolled by default —
 * pass `files`/`onFilesChange` to control, or `onBrowse` to fully override.
 */
export function Upload({
  hint = 'Supports .docx, .xlsx ; Max 50 MB', accept = '.docx,.xlsx',
  multiple = true, onBrowse, files, onFilesChange, showFiles = true, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [internal, setInternal] = React.useState([]);
  const inputRef = React.useRef(null);
  const list = files !== undefined ? files : internal;
  const setList = (next) => { if (files === undefined) setInternal(next); onFilesChange && onFilesChange(next); };

  const open = () => { if (onBrowse) return onBrowse(); inputRef.current && inputRef.current.click(); };
  const addFiles = (fileList) => {
    const names = Array.from(fileList).map((f) => f.name);
    if (!names.length) return;
    setList(multiple ? [...list, ...names] : names.slice(0, 1));
  };
  const remove = (i) => setList(list.filter((_, j) => j !== i));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, ...style }} {...rest}>
      <input ref={inputRef} type="file" accept={accept} multiple={multiple} hidden
        onChange={(e) => { addFiles(e.target.files); e.target.value = ''; }} />
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={open}
        onDragOver={(e) => { e.preventDefault(); setHover(true); }}
        onDragLeave={() => setHover(false)}
        onDrop={(e) => { e.preventDefault(); setHover(false); addFiles(e.dataTransfer.files); }}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
          padding: '28px 24px', cursor: 'pointer', textAlign: 'center',
          background: 'var(--brand-blue-10)',
          border: `1px dashed ${hover ? 'var(--brand-blue-70)' : 'var(--grey-50)'}`,
          borderRadius: 'var(--radius-md)', transition: 'border-color 120ms ease',
        }}
      >
        <Icon name="FileAddFill" size={24} style={{ color: hover ? 'var(--brand-blue-70)' : 'var(--grey-60)', transition: 'color 120ms ease' }} />
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, color: 'var(--grey-90)' }}>
          Drag and Drop or <span style={{ color: 'var(--brand-blue-70)' }}>Browse File</span>
        </span>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--grey-70)' }}>{hint}</span>
      </div>
      {showFiles && list.map((name, i) => <FileChip key={i} name={name} onRemove={() => remove(i)} />)}
    </div>
  );
}

/** Uploaded-file chip shown below the dropzone. */
export function FileChip({ name = 'Verification_Plan_Data.xlsx', onRemove, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px 6px 12px',
      background: 'var(--white)', border: '1px solid var(--grey-40)', borderRadius: 'var(--radius-sm)', ...style,
    }} {...rest}>
      <Icon name="FileExcel2Fill" size={18} style={{ color: 'var(--green-60)', flex: 'none' }} />
      <span style={{ flex: 1, minWidth: 0, fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--grey-90)',
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
      <IconButton icon="CloseLine" variant="ghost" size="sm" onClick={onRemove} style={{ color: 'var(--grey-70)', flex: 'none' }} />
    </div>
  );
}

export default Upload;
