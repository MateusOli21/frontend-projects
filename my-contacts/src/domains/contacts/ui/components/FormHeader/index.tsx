import { Link } from 'react-router-dom';

import { IoMdArrowBack } from 'react-icons/io';

interface FormHeaderProps {
  title: string;
}

export const FormHeader: React.FC<FormHeaderProps> = ({ title }) => {
  return (
    <div className="w-full mb-6">
      <Link to="/" className="flex items-center gap-1 text-primary mb-1">
        <IoMdArrowBack size={18} />
        <span className="font-semibold">Voltar</span>
      </Link>

      <strong className="text-xl">{title}</strong>
    </div>
  );
};
