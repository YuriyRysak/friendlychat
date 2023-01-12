/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCBf88ltuWirSF7OHrjCktSHahoTMFFgl4",
  authDomain: "friendlychat-45313-ddb42.firebaseapp.com",
  projectId: "friendlychat-45313-ddb42",
  storageBucket: "friendlychat-45313-ddb42.appspot.com",
  messagingSenderId: "826929793080",
  appId: "1:826929793080:web:11de71a4f25d82d2807ecd",
  measurementId: "G-Y09J8TNSZL"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB1qgBL65-AMhQTJ7M5L_zER4Hqc78RZyo",
//   authDomain: "friendlychat-45313.firebaseapp.com",
//   projectId: "friendlychat-45313",
//   storageBucket: "friendlychat-45313.appspot.com",
//   messagingSenderId: "131717890880",
//   appId: "1:131717890880:web:74c8a2f44ada4965b4f0a5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);