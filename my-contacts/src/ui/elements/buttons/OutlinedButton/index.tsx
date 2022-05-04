import React from 'react';

interface OutlinedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const OutlinedButton: React.FC<OutlinedButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 border border-primary text-primary font-semibold rounded"
      {...props}>
      {children}
    </button>
  );
};
