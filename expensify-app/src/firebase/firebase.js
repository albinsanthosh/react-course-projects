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

const database = firebase.database();

database.ref().set({
    name: 'Andrew Mead',
    age: 26,
    isSingle: false,
    location: {
        city: 'Philadelphia',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed.', e);
});

// database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

database.ref('attributes').set({
    height: 73,
    weight: 150
}).then(() => {
    console.log('Second set call worked');
}).catch((e) => {
    console.log('Things didnt work for the second error', e);
});


// console.log('I made a request to change the data');
