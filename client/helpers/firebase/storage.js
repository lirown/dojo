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

export async function updateFile(str) {
  const user = await getUser();
  if (!user) {
    throw 'not logged in';
  }
  return await new Promise(async (resolve) => {
    const fileRef = storageRef.child(`user/${user.uid}`);
    // Put the new file in the same child ref.
    await fileRef.put(`user/${user.uid}`);
    // Get the new URL
    const url = await fileRef.getDownloadURL();
    resolve(url);
  });
}

export async function createFile() {
  const user = await getUser();
  if (!user) {
    throw 'not logged in';
  }
  return await new Promise((resolve) => {
    const fileRef = storageRef.child(`user/${user.uid}`);
    fileRef.putString('{}').then((snapshot) => {
      resolve(snapshot);
    });
  });
}

export async function deleteFile() {
  const user = await getUser();
  if (!user) {
    throw 'not logged in';
  }

  return await new Promise((resolve, reject) => {
    // Create a reference to the file to delete
    var desertRef = storageRef.child(`images/${user.uid}`);

    // Delete the file
    desertRef
      .delete()
      .then(() => {
        // File deleted successfully
        resolve();
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        reject(error);
      });
  });
}
