
import firebase from 'firebase/compat/app';

import "firebase/compat/auth";

import "firebase/compat/firestore";









const firebaseConfig = {
    apiKey: "AIzaSyBZRot3lQ45tqovy0wbnTR37UuhYCfCBaE",
    authDomain: "chat-app2-a13ed.firebaseapp.com",
    projectId: "chat-app2-a13ed",
    storageBucket: "chat-app2-a13ed.appspot.com",
    messagingSenderId: "478518862110",
    appId: "1:478518862110:web:e4896480eea84590d6290f"
  };


 const app = firebase.initializeApp(firebaseConfig);
 
 
 const db = app.firestore();
 const auth = app.auth();

 const provider = new firebase.auth.GoogleAuthProvider();


 export {db, auth, provider}