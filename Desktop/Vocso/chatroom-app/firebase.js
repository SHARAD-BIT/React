// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtDRrkKkRsd7hzQiuwl3Bg9I6ND6TH6CY",
  authDomain: "chatroomapp-a571b.firebaseapp.com",
  projectId: "chatroomapp-a571b",
  storageBucket: "chatroomapp-a571b.firebasestorage.app",
  messagingSenderId: "634407542663",
  appId: "1:634407542663:web:a21809276b2a6b00a5fd22"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };