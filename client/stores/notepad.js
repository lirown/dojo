import * as storage from '../helpers/firebase/storage';
import { db } from '../stores/db';

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
 * update app state to storage
 * @param {String} content that was updated
 * @returns {Promise} result of the file creation
 */
export async function backup(data) {
  const content = await db.query({ groupBy: 'key', flat: true });
  return await storage.put(content);
}

/**
 *  app state to strage
 * @param {String} content that was updated
 */
export async function restore() {
  const state = await storage.get();
  await db.restore(state);
}
