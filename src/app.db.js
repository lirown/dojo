import { openDB } from 'idb';

const STORE_NAME = 'dojo-improve';

const dbPromise = openDB('dojo-notepad', 1, {
  upgrade(db) {
    const store = db.createObjectStore(STORE_NAME);
    store.createIndex('updatedAt', 'updatedAt');
  }
});

/**
 * get a sepecific key from a store
 *
 * @return {Promise<string>}
 */
export async function get(key) {
  return (await dbPromise).get(STORE_NAME, key);
}

/**
 * create a new record by a key and value
 *
 * @param {String} key to store a new record
 * @param {Object} a object contains different fields to store
 * @return {Promise<string>}
 */
export async function create(key, value) {
  return (await dbPromise).put(
    STORE_NAME,
    {
      ...value,
      updatedAt: Date.now()
    },
    key
  );
}

/**
 * delete sepecific key from a store
 *
 * @return {Promise<string>}
 */
export async function remove(key) {
  return (await dbPromise).delete(STORE_NAME, key);
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
export async function query({ index = 'updatedAt', groupBy, filter = () => true }) {
  const store = await dbPromise;
  const result = (await store.getAllFromIndex(STORE_NAME, index)).filter(filter);
  if (!groupBy) {
    return result;
  }
  const groupByMap = {};
  result.map(item => {
    const groupedBy = item[groupBy]
    if (!groupByMap[groupedBy]) {
      groupByMap[groupedBy] = [];
    }
    groupByMap[groupedBy].push(item);
  });

  return groupByMap;
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
  dbPromise
};
