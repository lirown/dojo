import * as storage from '../services/storage';
import { db } from '../services/db';
import { getUser } from '../services/authentication';

/**
 * key of last updated db for snapshot
 */
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
  done: 'added'
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

  try {
    const state = await db
      .store('notepad')
      .query({ groupBy: 'key', flat: true });
    await storage.put(`user/${user.uid}`, state);
  } catch (e) {
    console.log(e);
  }
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
  try {
    const path = `user/${user.uid}`;
    const { updated } = await storage.metadata(path);
    const currentUpdated = localStorage.getItem(LAST_UPDATED_KEY);
    if (updated == currentUpdated) {
      return;
    }
    localStorage.setItem(LAST_UPDATED_KEY, updated);
    const state = await storage.get(path);
    await db.store('notepad').clear();
    await db.store('notepad').restore(state || {});
  } catch (e) {
    console.error(e);
  }
}
