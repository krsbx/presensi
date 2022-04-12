import _ from 'lodash';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { IAuth } from './interfaces';

export const login = async (values: IAuth) => {
  try {
    await signInWithEmailAndPassword(auth, values.email, values.password);
  } catch (error) {
    console.error(error);
  }
};

export const register = async (values: IAuth) => {
  try {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
  } catch (error) {
    console.error(error);
  }
};
