import { Formik } from 'formik';
import { transactionValidation } from '../utils/validators';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  amount: Yup.number().required('Obrigatório').min(0.01, 'Valor inválido'),
  description: Yup.string().required('Obrigatório').max(100, 'Máx. 100 caracteres'),
});

export default function TransactionForm({ onSubmit, initialValues }) {
  return (
    <Formik
      initialValues={initialValues || { amount: '', description: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {/* Implementação similar ao LoginScreen */}
    </Formik>
  );
}