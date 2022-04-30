import React from 'react';

export const InputSearch: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  return (
    <input
      className="h-12 w-full shadow-lg px-4 rounded-lg outline-none"
      placeholder="Pesquisar contato..."
      {...props}
    />
  );
};
