import React, { useRef, useState } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  onSave: (text: string) => void;
}

function Editable(props: IProps) {
  const { className, value, ...rest } = props;
  const [mode, setMode] = useState<'show' | 'edit'>('show');
  const text = useRef(value);
  const cls = `rounded p-2 text-sm cursor-pointer hover:shadow-sm transition-all ${className}`;

  function handleChange(e: ContentEditableEvent) {
    text.current = e.target.value;
  }

  const handleBlur = () => {
    console.log(text.current);
  };

  return (
    <div>
      <ContentEditable
        html={text.current}
        onChange={handleChange}
        onBlur={handleBlur}
        className={cls}
      />
    </div>
  );
}

export default Editable;
