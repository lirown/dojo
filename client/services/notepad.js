import * as storage from '../services/firebase/storage';
import { db } from '../services/db';
import { getUser } from '../services/firebase/authentication';

/**
 * default status when no status defined
 */
export const DEFAULT_STATUS = 'work';

/**
 * hold translation of role key to level, title of engineering
 */
export const nextStatus = {
  work: 'added',
  added: 'done',
  done: 'work'
};

/**
 * state from db to storage
 * @returns {Promise} backup data
 */
export async function backup() {
  const user = await getUser();

  if (!user) {
    return;
  }

  const state = await db.query({ groupBy: 'key', flat: true });
  return await storage.put(`user/${user.uid}`, state);
}

/**
 * state from storage to indexeddb
 * @returns {Promise} db restore result
 */
export async function restore() {
  const user = await getUser();
  if (!user) {
    return;
  }
  const state = await storage.get(`user/${user.uid}`);
  await db.restore(state);
}
