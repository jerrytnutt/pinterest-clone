import firebase from "firebase";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCHPSB1S58MWb5E5gVXccN1p8DXgFNNuVw",
    authDomain: "pinterest-clone-843c8.firebaseapp.com",
    projectId: "pinterest-clone-843c8",
    storageBucket: "pinterest-clone-843c8.appspot.com",
    messagingSenderId: "1013112040906",
    appId: "1:1013112040906:web:bd97504bf14e75434d3333",
    measurementId: "G-W8VETWB8RF"
  };

  firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  console.log(auth)
  export {auth}