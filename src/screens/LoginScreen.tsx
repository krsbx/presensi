import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { login as _login } from '../utils/actions';
import { loginSchema } from '../utils/schema';
import { globalStyle } from '../utils/styles';
import { IAuth, IStackScreenProps } from '../utils/interfaces';
import { auth } from '../utils/firebase';

const LoginScreen: React.FC<IStackScreenProps<'Login'>> = ({ navigation }) => {
  const [isRequested, setIsRequested] = useState<boolean>(false);

  const login = async (values: IAuth) => {
    setIsRequested(true);
    try {
      await _login(values);
    } finally {
      setIsRequested(false);
    }
  };

  useEffect(() => {
    // Change screen to MainApp automatically if user is logged in
    const subscribe = auth.onAuthStateChanged((user) => {
      if (user) navigation.replace('MainApp', {});
    });

    // Remove the listener on unmount
    return () => {
      subscribe();
    };
  });

  return (
    <KeyboardAvoidingView style={globalStyle.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={login}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.container}>
            <Input
              placeholder="Emails"
              autoCompleteType={'off'}
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
            <Button
              title="Login"
              type="solid"
              onPress={handleSubmit}
              containerStyle={styles.button}
              disabled={isRequested}
            />
            <Button
              title="Register"
              type="outline"
              onPress={() => navigation.push('Register', {})}
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

export default LoginScreen;
