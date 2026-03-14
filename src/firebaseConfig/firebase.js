import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBB5VzUXe5sf-j-tFtJg-LYvSPFKvKQF9A',
  authDomain: 'framing-quotation-system.firebaseapp.com',
  projectId: 'framing-quotation-system',
  storageBucket: 'framing-quotation-system.firebasestorage.app',
  messagingSenderId: '772482400021',
  appId: '1:772482400021:web:16bb34c8ff32a068a3f31c',
  measurementId: 'G-KXWSY95D53',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app, 'framing-quotation-system');
