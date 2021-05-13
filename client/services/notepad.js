import * as storage from '../services/firebase/storage';
import { db } from '../services/db';
import { getUser } from '../services/firebase/authentication';

export const LAST_UPDATED_KEY = 'restore-last-updated-key';
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
  const user = getUser();

  if (!user) {
    return;
  }

  const state = await db.query({ groupBy: 'key', flat: true });
  return await storage.put(`user/${user.uid}`, state);
}

/**
 * state from storage to indexeddb if last updated different
 * @returns {Promise} db restore result
 */
export async function restore() {
  const user = getUser();
  if (!user) {
    return;
  }
  const path = `user/${user.uid}`;
  const { updated } = await storage.metadata(path);
  const currentUpdated = localStorage.getItem(LAST_UPDATED_KEY);
  if (updated == currentUpdated) {
    return;
  }
  localStorage.setItem(LAST_UPDATED_KEY, updated);
  const state = await storage.get(path);
  await db.restore(state);
}
