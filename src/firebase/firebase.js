import firebase from 'firebase';
import 'firebase/database';

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
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// const onValueChange = database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     }, (e) => {
//         console.log('Error while fetching data', e);
//     });

// setTimeout(() => {
//     database.ref('expenses/-MYAyLK4se5myD8b6R6B').update({
//         amount: 205,
//         createdAt: 4,
//         description: 'Gym Jim',
//         new_prop: 'a prop'
//     });
// }, 3500);

// setTimeout(() => {
//     database.ref('expenses/-MYAyLK4se5myD8b6R6B').update({
//         amount: 195,
//         createdAt: 0,
//         description: 'Gum',
//         new_prop: null
//     });
// }, 7000);

// database.ref('expenses').push({
//     description: 'Gum',
//     notes: 'Gym',
//     amount: 195,
//     createdAt: 0
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     notes: 'April',
//     amount: 109500,
//     createdAt: 1
// });

// database.ref('expenses').push({
//     description: 'Credit card',
//     notes: 'Hair cut',
//     amount: 4500,
//     createdAt: 2
// });

// database.ref('notes').push({
//     title: 'First note',
//     body: 'This is my note'
// });

// database.ref('notes').push({
//     title: 'Another note',
//     body: 'This is my second note'
// });

// database.ref('notes/-MYAwPyHuLItrJaCaToA').update({
//     body: 'A completely new body'
// })

// database.ref('notes/-MYAwc6iELII_LwgmaY2').remove();

// database.ref('notes').set(null);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const person = snapshot.val();
//     console.log(`${person.name}, ${person.age} years old, is a ${person.job.title} at ${person.job.company}, ${person.location.city}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref().update({
//         age: 50,
//         'job/company': 'Google',
//         'location/city': "Toronto"
//     });
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref().update({
//         age: 49,
//         'job/company': 'Amazon',
//         'location/city': "Ottawa"
//     });
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error while fetching data', e);
//     });

// database.ref().set({
//     name: 'Nghia Doan',
//     age: 49,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Moncton',
//         province: 'NB',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((e) => {
//     console.log('Failed with error.', e);
// });

// database.ref('attributes').set({
//     height: 165,
//     weight: 65.5
// }).then(() => {
//     console.log('Attributes are saved.');
// }).catch((e) => {
//     console.log('Set attributes failed with error.', e);
// });

// database.ref('isSingle')
//     .remove(() => {
//         console.log('onComplete called.');
//     }).then(() => {
//         console.log('isSingle is removed.');
//     }).catch((e) => {
//         console.log('isSingle removal failed with error.', e);
//     });

// database.ref('isSingle')
//     .set(null)
//     .then(() => {
//         console.log('isSingle is removed.');
//     }).catch((e) => {
//         console.log('isSingle removal failed with error.', e);
//     });

// database.ref()
//     .update({
//         age: 50,
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': "Toronto",
//         'location/province': "ON"
//     }).then(() => {
//         console.log('Update is completed.');
//     }).catch((e) => {
//         console.log('Data update failed with error.', e);
//     });
