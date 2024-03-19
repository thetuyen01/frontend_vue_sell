
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDHI7qqbL8AYjzUY-uSaW8u9EeRgAJF6D4',
  authDomain: 'banhmivn-d0007.firebaseapp.com',
  projectId: 'banhmivn-d0007',
  storageBucket: 'banhmivn-d0007.appspot.com',
  messagingSenderId: '173894854696',
  appId: '1:173894854696:web:069335108ec3a8255ded1d'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export{
    db
}