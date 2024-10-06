/* - - - - - - - - - - - - - - - - - 
   Configurations for the Firebase
- - - - - - - - - - - - - - - - - - -  */
// Firebase Configuration
export const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_apiKey,
    authDomain: import.meta.env.VITE_FIREBASE_authDomain,
    databaseURL: import.meta.env.VITE_FIREBASE_databaseURL,
    projectId: import.meta.env.VITE_FIREBASE_projectId,
    storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
    messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
    appId: import.meta.env.VITE_FIREBASE_appId
};

