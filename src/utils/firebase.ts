import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
let app: firebase.FirebaseApp;

if (firebase.getApps().length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const db = getFirestore(app);

export const auth = getAuth();
export const database = collection(db, 'mobile');
export const timestamp = serverTimestamp();

export default app;
