import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDa5tm7-I6e2DXN9z-p-xuFSIgfQHqgmvM",
    authDomain: "firegram-36c98.firebaseapp.com",
    projectId: "firegram-36c98",
    storageBucket: "firegram-36c98.appspot.com",
    messagingSenderId: "121845695315",
    appId: "1:121845695315:web:5aa24d4bd51ef71ac217a6",
    measurementId: "G-GCQHWVMLEX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectFirestore,projectStorage};