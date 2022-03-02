import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyB4C_s5BgR8C41mM9bUKG3bmrjHVUXzBz4",
    authDomain: "boardapp-abf68.firebaseapp.com",
    projectId: "boardapp-abf68",
    storageBucket: "boardapp-abf68.appspot.com",
    messagingSenderId: "127042186474",
    appId: "1:127042186474:web:22d3e05de51ebf337ffb93",
    measurementId: "G-03ZXHQ0KME"
  };
  
  // Initialize Firebase
  if(firebase.app.length){
 firebase.initializeApp(firebaseConfig);
  }
 

  export default firebase;