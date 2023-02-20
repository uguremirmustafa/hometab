import { DeleteIcon, EditIcon } from '@src/assets/icons';
import React, { useEffect, useRef, useState } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  onSave: (text: string) => void;
  handleDelete: () => void;
}

function Editable(props: IProps) {
  const { className, value, onSave, handleDelete, ...rest } = props;
  const [mode, setMode] = useState<'show' | 'edit'>('show');

  const text = useRef(value);
  const innerRef = useRef<HTMLElement | null>(null);
  const cls = `group/editable rounded p-2 text-sm cursor-pointer focus:cursor-text hover:shadow-sm transition-all ${className}`;

  function handleChange(e: ContentEditableEvent) {
    text.current = e.target.value;
  }

  const handleBlur = () => {
    setMode('show');
    if (text.current === '') {
      text.current = 'Untitled';
    }
    onSave(text.current);
  };

  const enabledEditing = () => {
    setMode('edit');
  };
  const el = innerRef?.current;

  useEffect(() => {
    if (mode === 'edit' && el) {
      el.focus();
      if (typeof window.getSelection != 'undefined' && typeof document.createRange != 'undefined') {
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  }, [mode, !!el]);

  const btnCls =
    'p-[3px] shadow-md overflow-hidden dark:bg-slate-600 dark:hover:bg-slate-600/75 bg-slate-300/50 hover:bg-slate-400/50 transition-all cursor-pointer rounded-none';

  return (
    <div className="relative group">
      <ContentEditable
        innerRef={innerRef}
        html={text.current}
        onChange={handleChange}
        onBlur={handleBlur}
        className={cls}
        disabled={mode === 'show'}
        spellCheck={false}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleBlur();
          }
        }}
      />
      {mode !== 'edit' ? (
        <div className="absolute hidden group-hover:flex right-2 top-2 divide-x dark:divide-slate-50 divide-slate-300 rounded overflow-hidden">
          <button className={btnCls} onClick={enabledEditing}>
            <EditIcon size={16} className="dark:fill-slate-50 fill-slate-900" />
          </button>
          <button className={`${btnCls} group/editable:focus:hidden`} onClick={handleDelete}>
            <DeleteIcon size={16} />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Editable;
