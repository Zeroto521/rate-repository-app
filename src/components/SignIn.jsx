import { Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import { SignInForm } from './SignInForm';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least four characters long')
    .required('Username is required'),

  password: yup
    .string()
    .min(6, 'Password must be at least six characters long')
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

export const SignInContainer = ({
  initialValues,
  onSubmit,
  validationSchema,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const history = useHistory();

  const onSubmit = async (values) => {
    console.log(values);
    history.push('/');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
