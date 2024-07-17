import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
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
