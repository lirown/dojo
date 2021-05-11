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
        try {
          resolve(JSON.parse(url));
        } catch (e) {
          resolve(url);
        }
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        reject(error.code);
      });
  });
}

export async function updateFile(key, value) {
  const user = await getUser();
  if (!user) {
    throw 'not logged in';
  }
  return await new Promise(async (resolve) => {
    const originalFile = await getFile();

    const fileRef = storageRef.child(`user/${user.uid}`);
    // Put the new file in the same child ref.
    const res = await fileRef.put(
      JSON.stringify({ ...originalFile, [key]: value })
    );
    resolve(res);
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
