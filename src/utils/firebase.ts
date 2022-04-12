import _auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const db = firestore();
export const auth = _auth();
export const database = db.collection('mobile').doc('presensi');
export const timestamp = () => firestore.Timestamp.now();
export const Timestamp = firestore.Timestamp;
