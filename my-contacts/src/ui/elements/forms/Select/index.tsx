import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ children, className, ...props }) => {
  return (
    <select
      className={`h-12 px-4 py-2 outline-none rounded-lg bg-white shadow-sm ${className}`}
      {...props}>
      {children}
    </select>
  );
};
