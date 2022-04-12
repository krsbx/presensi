import _ from 'lodash';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { register as _register } from '../utils/actions';
import { IAuth, IStackScreenProps } from '../utils/interfaces';
import { registerSchema } from '../utils/schema';
import { globalStyle } from '../utils/styles';

const RegisterScreen: React.FC<IStackScreenProps<'Register'>> = ({ navigation }) => {
  const [isRequested, setIsRequested] = useState<boolean>(false);

  const register = async (values: IAuth) => {
    setIsRequested(true);
    try {
      await _register(values);
    } finally {
      setIsRequested(false);
    }
  };

  return (
    <KeyboardAvoidingView style={globalStyle.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          register(_.omit(values, ['confirmPassword']));
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.container}>
            <Input
              placeholder="Emails"
              autoCompleteType={'email'}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.inputs}
              editable={!isRequested}
              errorMessage={errors.email}
              containerStyle={styles.inputContainer}
            />
            <Input
              placeholder="Passwords"
              autoCompleteType={'off'}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={styles.inputs}
              onSubmitEditing={handleSubmit}
              editable={!isRequested}
              errorMessage={errors.password}
              containerStyle={styles.inputContainer}
            />
            <Input
              placeholder="Konfirmasi Passwords"
              autoCompleteType={'off'}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
              style={styles.inputs}
              onSubmitEditing={handleSubmit}
              editable={!isRequested}
              errorMessage={errors.confirmPassword}
              containerStyle={styles.inputContainer}
            />
            <Button
              title="Register"
              onPress={handleSubmit}
              containerStyle={styles.button}
              disabled={isRequested}
            />
            <Button
              title="Back"
              type="outline"
              onPress={() => navigation.pop()}
              containerStyle={styles.button}
            />
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    padding: 5,
  },
  inputs: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderColor: 'transparent',
    backgroundColor: '#ECECEC',
  },
});

export default RegisterScreen;
