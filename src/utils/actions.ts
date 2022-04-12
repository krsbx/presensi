import _ from 'lodash';
import { auth, database, timestamp } from './firebase';
import { IAuth, IPresensi } from './interfaces';

export const login = async (values: IAuth) => {
  try {
    await auth.signInWithEmailAndPassword(values.email, values.password);
  } catch (error) {
    console.error(error);
  }
};

export const register = async (values: IAuth) => {
  try {
    await auth.createUserWithEmailAndPassword(values.email, values.password);
  } catch (error) {
    console.error(error);
  }
};

export const postPresensi = async (values: Partial<IPresensi>) => {
  const vals = _.cloneDeep(values);
  vals.timestamp = timestamp();
  vals.userId = auth.currentUser!.uid;

  try {
    const docRef = await database.collection(vals.userId).add(vals);

    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
