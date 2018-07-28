import * as firebase from 'firebase';

// Initialize Firebase

 
const firebaseConfig = firebase.initializeApp(config);

export const databaseRef = firebase.database();

export default firebaseConfig;