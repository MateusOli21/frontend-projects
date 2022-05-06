import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.Ref<HTMLInputElement> | null;
}

export const Input: React.FC<InputProps> = ({ inputRef, ...props }) => {
  return (
    <input
      ref={inputRef}
      className="h-12 w-full shadow-sm px-4 rounded-lg outline-none"
      {...props}
    />
  );
};
