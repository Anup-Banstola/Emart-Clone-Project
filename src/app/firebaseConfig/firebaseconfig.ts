import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDgwMAwFybzdw1ezjVW4_r-S3iYY31SEWw',
  authDomain: 'e-mart-clone-for-interns.firebaseapp.com',
  projectId: 'e-mart-clone-for-interns',
  storageBucket: 'e-mart-clone-for-interns.appspot.com',
  messagingSenderId: '1044040470176',
  appId: '1:1044040470176:web:fde6dcad484b5ac1c903c5',
  measurementId: 'G-G40YYBBVFY',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
