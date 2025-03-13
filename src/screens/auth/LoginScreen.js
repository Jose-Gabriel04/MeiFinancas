import { useMutation } from '@apollo/client';
import { loginValidation } from '../../utils/validators';
import { LOGIN } from '../../apollo/queries';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Obrigatório'),
  password: Yup.string().required('Obrigatório'),
});

export default function LoginScreen({ navigation }) {
  const [login] = useMutation(LOGIN);

  const handleSubmit = async (values) => {
    try {
      const { data } = await login({ variables: values });
      await AsyncStorage.setItem('authToken', data.login.token);
      navigation.navigate('Main');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View>
          <TextInput
            placeholder="E-mail"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />
          {errors.email && <Text>{errors.email}</Text>}

          <TextInput
            placeholder="Senha"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && <Text>{errors.password}</Text>}

          <Button title="Entrar" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}