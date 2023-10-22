import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6W97itV2I_sgEIDJxLIgR2l-RsrkwdAs",
  authDomain: "my-portfolio-82cee.firebaseapp.com",
  projectId: "my-portfolio-82cee",
  storageBucket: "my-portfolio-82cee.appspot.com",
  messagingSenderId: "585869453496",
  appId: "1:585869453496:web:61ff41fc9a033f802c6c4d",
  measurementId: "G-8L5JB9CGQF"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth};
export default db;