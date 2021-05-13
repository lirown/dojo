import { storageRef } from './index';
import { getUser } from './authentication';

/**
 * Save a content of a file by name
 *
 * @return {Promise<String>}
 */

export async function put(path, content) {
  return storageRef.child(path).putString(JSON.stringify(content));
}

/**
 * Get a state of user after login
 * @return {Promise<String>}
 */

export async function get(path) {
  try {
    // Get the download URL
    const url = await storageRef.child(path).getDownloadURL();
    return await fetch(url, {
      method: 'GET' // *GET, POST, PUT, DELETE, etc.
    }).then((res) => res.json());
  } catch (err) {
    console.error(err, res);
    return {};
  }
}
