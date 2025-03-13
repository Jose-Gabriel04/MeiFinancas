import * as Yup from 'yup';

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  password: Yup.string()
    .min(6, 'Mínimo 6 caracteres')
    .required('Campo obrigatório')
});

export const transactionValidation = Yup.object().shape({
  amount: Yup.number()
    .typeError('Deve ser um número')
    .positive('Valor deve ser positivo')
    .required('Campo obrigatório'),
  description: Yup.string()
    .max(100, 'Máximo 100 caracteres')
    .required('Campo obrigatório')
});