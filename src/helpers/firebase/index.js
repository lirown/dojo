import firebase from 'firebase';

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
const storage = app.storage().ref();

console.log(storage);
export { storage, app };
