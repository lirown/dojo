/**
 * define the firebase apo name
 */
const firebaseAppName = 'dojo-ae8b1';

/**
 * config file
 */
export default {
  branch: 'roee-static-design',
  environment: 'development',
  appName: 'Dojo Engineering',
  appDescription: 'Improve your craftsmanship as a Software Engineer',
  firebase: {
    apiKey: 'AIzaSyBkIN_bAvP2kXSlxewskt_y0DnSAOapxWI',
    authDomain: `${firebaseAppName}.firebaseapp.com`,
    databaseURL: `https://${firebaseAppName}.firebaseio.com`,
    projectId: firebaseAppName,
    storageBucket: `${firebaseAppName}.appspot.com`,
    messagingSenderId: '197637216871'
  }
};
