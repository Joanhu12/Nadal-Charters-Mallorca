
import React, { useState, useEffect, useRef } from 'react';

interface EditableTextProps {
  value: string;
  onSave: (newValue: string) => void;
  isEditing: boolean;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  multiline?: boolean;
}

export const EditableText: React.FC<EditableTextProps> = ({
  value,
  onSave,
  isEditing,
  className = '',
  tag = 'span',
  multiline = false
}) => {
  const [localValue, setLocalValue] = useState(value);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.FormEvent<HTMLElement>) => {
    setLocalValue(e.currentTarget.innerText);
  };

  const handleBlur = () => {
    onSave(localValue);
  };

  const Tag = tag;

  if (!isEditing) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <Tag
      ref={contentRef as any}
      contentEditable
      suppressContentEditableWarning
      onInput={handleChange}
      onBlur={handleBlur}
      className={`${className} outline-none border-b border-white/20 focus:border-white/60 min-w-[20px] transition-all`}
    >
      {value}
    </Tag>
  );
};
