import {firebase} from '@firebase/app';
import '@firebase/database';


// Initialize Firebase

const firebaseConfig = firebase.initializeApp(config);

export const databaseRef = firebase.database();

export default firebaseConfig;