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

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// //     }, (e) => {
// //         console.log('Error with data fetching', e);
// //     });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// //     });

// // database.ref('expenses').push({
// //     description: 'Rent',
// //     note: '',
// //     amount: 10950,
// //     createdAt: 1
// // });

// // database.ref('notes/-Nu908J6vIWgM5jrr7QX').remove();

// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React Native, Angular, Python'
// // })

// // database.ref('notes').set(notes);

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // });

// // setTimeout(() => {
// //     database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     database.ref('age').set(30);
// // }, 10500);

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //     name: 'Andrew Mead',
// //     age: 26,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Philadelphia',
// //         country: 'United States'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log('This failed.', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // database.ref('isSingle').set(null);

// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log('Data was removed');
// //     }).catch((e) => {
// //         console.log('Did not remove data', e);
// //     });
