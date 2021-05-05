import { storage } from './index';

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
  return await new Promise((resolve) => {
    storage.putString(str).then((snapshot) => {
      resolve(snapshot);
    });
  });
}
