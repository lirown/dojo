import { openDB } from 'idb';
import { updateFile, getFile } from '../helpers/firebase/storage';

const STORE_NAME = 'dojo-improve';

const dbPromise = openDB('dojo-notepad', 1, {
  upgrade(db) {
    const store = db.createObjectStore(STORE_NAME);
    store.createIndex('createdAt', 'createdAt');
  }
});

/**
 * get a sepecific key from a store
 *
 * @return {Promise<string>}
 */
export async function get(key) {
  const localStorage = (await dbPromise).get(STORE_NAME, key);
  const db = await getFile()?.[key];
  return localStorage || db;
}

/**
 * create a new record by a key and value
 *
 * @param {String} key to store a new record
 * @param {Object} a object contains different fields to store
 * @return {Promise<string>}
 */
export async function create(key, value) {
  const localStorage = (await dbPromise).put(
    STORE_NAME,
    {
      ...value,
      updatedAt: Date.now()
    },
    key
  );

  await updateFile(key, value);
  return localStorage;
}

/**
 * delete sepecific key from a store
 *
 * @return {Promise<void>}
 */
export async function remove(key) {
  const localStorage = (await dbPromise).delete(STORE_NAME, key);
  await updateFile(key, '');
  return localStorage;
}

/**
 * delete all content of the store
 *
 * @return {Promise<string>}
 */
export async function clear() {
  return (await dbPromise).clear(STORE_NAME);
}

/**
 * get a array of all keys of a store
 *
 * @return {Array<string>}
 */

export async function keys() {
  return (await dbPromise).getAllKeys(STORE_NAME);
}

/**
 * Query all data from an IndexedDB database by specific index
 *
 * @param {Object} args the arguments for the query
 * @param {String} args.groupBy a key to choose to create map
 * @param {String} args.index a indice to choose to fetch data from
 * @return {Promise<string>}
 */
export async function query({
  index = 'updatedAt',
  groupBy,
  flat = false,
  filter = () => true
}) {
  const store = await dbPromise;
  const result = (await store.getAllFromIndex(STORE_NAME, index)).filter(
    filter
  );
  if (!groupBy) {
    return result;
  }
  const groupByMap = {};
  result.map((item) => {
    const groupedBy = item[groupBy];
    if (flat) {
      groupByMap[groupedBy] = item;
      return;
    }
    if (!groupByMap[groupedBy]) {
      groupByMap[groupedBy] = [];
    }
    groupByMap[groupedBy].push(item);
  });

  return groupByMap;
}
/**
 * Extract numbers around amount of items in the db by query
 *
 * @param {Object} args the arguments for the query
 * @param {String} args.groupBy a key to choose to create map
 * @param {String} args.index a indice to choose to fetch data from
 * @return {Promise<string>}
 */

export async function aggregate({
  index = 'updatedAt',
  groupBy,
  flat = false,
  filter = () => true
}) {
  const result = await query({ index, groupBy, flat, filter });
  const counters = {};
  Object.keys(result).map((key) => (counters[key] = result[key].length || 0));
  return counters;
}
/**
 * exposing different methods of our indexeddb
 */

export const db = {
  get,
  query,
  create,
  remove,
  clear,
  keys,
  aggregate,
  dbPromise
};
