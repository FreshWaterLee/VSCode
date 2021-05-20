import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyBvwksA_mxIgMbk-9WboGFvXXBaQW-mkyY",
    authDomain: "reactstudy-b24bb.firebaseapp.com",
    projectId: "reactstudy-b24bb",
    storageBucket: "reactstudy-b24bb.appspot.com",
    messagingSenderId: "396496487716",
    appId: "1:396496487716:web:cd302952f00fa9d28d1fb1",
    measurementId: "G-Y1GJH3WFLC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});
  firebase.analytics();

  export default firebase;