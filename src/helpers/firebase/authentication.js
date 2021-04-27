import firebase from 'firebase';
import { html } from '../../components/base';

const apiName = 'dojo-ae8b1';
const appConfig = {
  apiKey: 'AIzaSyBkIN_bAvP2kXSlxewskt_y0DnSAOapxWI',
  authDomain: `${apiName}.firebaseapp.com`,
  databaseURL: `https://${apiName}.firebaseio.com`,
  projectId: apiName,
  storageBucket: `${apiName}.appspot.com`,
  messagingSenderId: '197637216871'
};

const app = firebase.initializeApp(appConfig);

export async function signIn() {
  return await new Promise((resolve, reject) => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode, errorMessage);
      });
  });
}

export async function forgotPassword(email) {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://lirown.github.io/dojo/',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };

  return await new Promise((resolve, reject) => {
    app
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
        resolve();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode, errorMessage);
      });
  });
}

export async function signOut() {
  return await new Promise((resolve, reject) => {
    app
      .auth()
      .signOut()
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// todo: save name in some db
export async function signUp(email, password, name) {
  return await new Promise((resolve, reject) => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode, errorMessage);
      });
  });

  // SAVE NAME SOMEWHERE
}
