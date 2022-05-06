import * as yup from 'yup';

export const newContactSchema = yup.object({
  category: yup.string().required('Categoria é um campo obrigatório'),
  phone: yup
    .string()
    .min(11, 'O telefone deve possuir no mínimo 15 dígitos')
    .max(15, 'O telefone deve possuir no máximo 15 dígitos')
    .required('Telefone é um campo obrigatório'),
  email: yup
    .string()
    .email('Digite um e-mail no formato válido')
    .required('E-mail é um campo obrigatório'),
  name: yup.string().required('O nome é um campo obrigatório'),
});
