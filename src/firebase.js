// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpqS8PcQc6ZWn7PclOqAr_tfRytaye_VA",
  authDomain: "login-fh.firebaseapp.com",
  projectId: "login-fh",
  storageBucket: "login-fh.appspot.com",
  messagingSenderId: "31051696630",
  appId: "1:31051696630:web:db840dc2b6d6205d139fd7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
