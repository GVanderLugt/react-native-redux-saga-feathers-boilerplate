import React from 'react';

// components
import { View } from 'react-native';
import TextInput from '../../../../TextInput';
import { Field } from 'redux-form/immutable';

const RegisterForm = function () {
  return (
    <View>
      <Field component={ TextInput }
        name='name'
        placeholder='Name'
        required />

      <Field component={ TextInput }
        name='email'
        placeholder='Email'
        autoCapitalize='none'
        required />

      <Field component={ TextInput }
        name='password'
        placeholder='Password'
        autoCapitalize='none'
        secureTextEntry
        required />
    </View>
  );
};

export default RegisterForm;
