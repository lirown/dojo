import firebase from 'firebase';
import config from '../../config';

const app = firebase.initializeApp(config.firebase);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

export { storage, storageRef, app };
