import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDOq_uqpZyTl7EFEQUeCJ0jGcXUAjUdu6k",
    authDomain: "empreiteiro-7bb4d.firebaseapp.com",
    projectId: "empreiteiro-7bb4d",
    storageBucket: "empreiteiro-7bb4d.appspot.com",
    messagingSenderId: "741108522148",
    appId: "1:741108522148:web:8e69f82c35fe211408da31",
    measurementId: "G-HFKY27ES97"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };