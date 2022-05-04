import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  if (!isOpen) return <></>;

  return ReactDOM.createPortal(
    <div className="w-screen min-h-screen bg-black/50 absolute top-0 left-0 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md">{children}</div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};
