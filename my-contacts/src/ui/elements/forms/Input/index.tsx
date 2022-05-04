import React from 'react';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  return <input className="h-12 w-full shadow-sm px-4 rounded-lg outline-none" {...props} />;
};
