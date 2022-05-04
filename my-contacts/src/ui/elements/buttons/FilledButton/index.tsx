import React from 'react';

interface FilledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const FilledButton: React.FC<FilledButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 text-white bg-primary font-semibold rounded ${className}`}
      {...props}>
      {children}
    </button>
  );
};
