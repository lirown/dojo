import { storageRef } from './index';
import { getUser } from './authentication';

export async function getFile(file) {
  // Create a reference to the file we want to download
  const starsRef = storage.child(file);

  // Get the download URL
  return await new Promise((resolve, reject) => {
    starsRef
      .getDownloadURL()
      .then((url) => {
        // Insert url into an <img> tag to "download"
        resolve(url);
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        reject(error.code);
      });
  });
}

export async function createOrUpdateFile(str) {
  const user = await getUser();
  if (!user) {
    throw 'not logged in';
  }
  return await new Promise((resolve) => {
    const fileRef = storageRef.child(`user/${user.uid}`);
    fileRef.putString(str).then((snapshot) => {
      resolve(snapshot);
    });
  });
}
