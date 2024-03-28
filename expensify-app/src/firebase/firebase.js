import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4L4uOR1F4zE3yhX7gWD4Wi0cSzxIXzBE",
    authDomain: "expensify-886ac.firebaseapp.com",
    databaseURL: "https://expensify-886ac-default-rtdb.firebaseio.com",
    projectId: "expensify-886ac",
    storageBucket: "expensify-886ac.appspot.com",
    messagingSenderId: "659032055673",
    appId: "1:659032055673:web:a070cc0779f8d5ceaf99a8"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Albin Santhosh'
});