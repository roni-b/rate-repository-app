import Text from './Text';
import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  form: {
    backgroundColor: theme.colors.formBackground,
    padding: 20
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    padding: 10,
    borderRadius: 4
  },
  button: {
    color: theme.colors.textButton,
    fontWeight: theme.fontWeights.bold,
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" />
        <Pressable style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.button}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {

  const onSubmit = () => {
    console.log(123)
  }

  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};


export default SignIn;