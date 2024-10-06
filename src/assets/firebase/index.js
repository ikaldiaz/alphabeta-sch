// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics';
// import { getAuth } from 'firebase/auth'
import { getAuth, signOut, GoogleAuthProvider, setPersistence, signInWithPopup, signInWithRedirect, browserSessionPersistence } from 'firebase/auth'

import { getDatabase } from "firebase/database";

import { firebaseConfig } from './config'


// // Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const fbAuth = getAuth(firebaseApp);
export const fbAnalytics = getAnalytics(firebaseApp);
export const fbDatabase = getDatabase(firebaseApp);

fbAuth.languageCode = fbAuth.useDeviceLanguage();
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();

// const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
// fbAuth.languageCode = 'id';

export const loginGoogleX = () => {
  signInWithPopup(fbAuth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export const logoutFb = () => {
  signOut(fbAuth).then(() => {
    // Sign-out successful.
    console.log('logout success');
    
  }).catch((error) => {
    // An error happened.
    console.log('error ', error);
  });

}

function handleCredentialResponse(response) {
  // Build Firebase credential with the Google ID token.
  const idToken = response.credential;
  const credential = GoogleAuthProvider.credential(idToken);

  // Sign in with credential from the Google user.
  signInWithCredential(auth, credential).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The credential that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

// export const login = setPersistence(fbAuth, browserSessionPersistence)
//   .then(() => {
//     console.log('setPersistence - Root');

//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.
//     return signInWithEmailAndPassword(fbAuth, email, password);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// export const loginGoogle = setPersistence(fbAuth, browserSessionPersistence)
//   .then(() => {
//     console.log('setPersistence - Root', browserSessionPersistence);

//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.
//     return signInWithPopup(fbAuth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

//   const login = function(email, password) {
//     return setPersistence(fbAuth, browserLocalPersistence)
//     .then(() =>
//       signInWithEmailAndPassword(fbAuth, email, password)
//     )
//     .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });
//   }



































// fb.js
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import { getStorage } from "firebase/storage";

// /* - - - - - - - - - - - - - - - - -
//    Configurations for the Firebase
// - - - - - - - - - - - - - - - - - - -  */
// // Firebase Configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_apiKey,
//     authDomain: import.meta.env.VITE_FIREBASE_authDomain,
//     databaseURL: import.meta.env.VITE_FIREBASE_databaseURL,
//     projectId: import.meta.env.VITE_FIREBASE_projectId,
//     storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
//     appId: import.meta.env.VITE_FIREBASE_appId
// };


// // // Initialize Firebase
// export const fbApp = initializeApp(firebaseConfig);
// export const auth = getAuth(fbApp);
// export const database = getDatabase(fbApp);
// export const storage = getStorage(fbApp);
