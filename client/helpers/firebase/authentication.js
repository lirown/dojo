import { app } from './index';
import { createFile } from './storage';

export async function signIn(email, password) {
  return await new Promise((resolve, reject) => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // todo: sync indexdb with firebase

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
    url: 'https:/dojo.engineering/forgot/',
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
    dynamicLinkDomain: 'https:/dojo.engineering/forgot'
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

export async function signUp(email, password, displayName) {
  return await new Promise((resolve, reject) => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        // Signed in

        const res = await userCredential.user.updateProfile({
          displayName
        });

        await createFile();

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

export async function getUser() {
  return app.auth().currentUser;
}
