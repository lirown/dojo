import { openDB } from 'idb';

/**
 * Define data types for validations
 */
export const STRING = 'string';
export const ENUM = 'enum';
export const NUMBER = 'number';
export const DATE = 'date';

const storeMap = {
  user: 'dojo-improve',
  notepad: 'dojo-improve'
};
/**
 * Indexeddb class for sotring different stores
 */
class DBInstance {
  /** @inheritdoc */
  constructor(name = 'dojo-notepad', version = 1, model) {
    this.dbPromise = openDB(name, version, {
      upgrade(db) {
        const store = db.createObjectStore(
          this?.selectedStore || 'dojo-improve'
        );
        store.createIndex('updatedAt', 'updatedAt');
      }
    });
  }

  /**
   * choose the right store
   */
  store(name) {
    this.selectedStore = storeMap[name];
    return this;
  }

  /**
   * get a sepecific key from a store
   *
   * @return {Promise<string>}
   */
  async get(key) {
    return (await this.dbPromise).get(this.selectedStore, key);
  }

  /**
   * create a new record by a key and value
   *
   * @param {String} key to store a new record
   * @param {Object} a object contains different fields to store
   * @return {Promise<string>}
   */
  async create(key, value) {
    const data = {
      ...value,
      updatedAt: Date.now()
    };
    (await this.dbPromise).put(this.selectedStore, data, key);
    return { [key]: data };
  }

  /**
   * create a new record by a key and value
   *
   * @param {Object<String, Object>} a object restored data
   * @return {Promise<string>}
   */
  async restore(data) {
    const dbInstance = await this.dbPromise;
    const putTasks = [];
    Object.keys(data).map((key) =>
      putTasks.push(dbInstance.put(this.selectedStore, data[key], key))
    );
    return Promise.all(putTasks);
  }

  /**
   * delete sepecific key from a store
   *
   * @return {Promise<string>}
   */
  async remove(key) {
    return (await this.dbPromise).delete(this.selectedStore, key);
  }

  /**
   * delete all content of the store
   *
   * @return {Promise<string>}
   */
  async clear() {
    return (await this.dbPromise).clear(this.selectedStore);
  }

  /**
   * get a array of all keys of a store
   *
   * @return {Array<string>}
   */
  async keys() {
    return (await this.dbPromise).getAllKeys(this.selectedStore);
  }

  /**
   * Query all data from an IndexedDB database by specific index
   *
   * @param {Object} args the arguments for the query
   * @param {String} args.groupBy a key to choose to create map
   * @param {String} args.index a indice to choose to fetch data from
   * @return {Promise<string>}
   */
  async query({
    index = 'updatedAt',
    groupBy,
    flat = false,
    filter = () => true
  }) {
    const store = await this.dbPromise;
    const result = (
      await store.getAllFromIndex(this.selectedStore, index)
    ).filter(filter);
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
  async aggregate({
    index = 'updatedAt',
    groupBy,
    flat = false,
    filter = () => true
  }) {
    const result = await this.query({ index, groupBy, flat, filter });
    const counters = {};
    Object.keys(result).map((key) => (counters[key] = result[key].length || 0));
    return counters;
  }
}

/**
 * exposing different methods of our indexeddb
 */
export const db = new DBInstance('dojo-notepad', 1, {
  user: {
    role: { type: STRING },
    updatedAt: { type: NUMBER, indexed: true }
  },
  Notepad: {
    key: { type: STRING, key: true },
    section: {
      type: ENUM,
      values: ['Responsibilities', 'Resources', 'Examples', 'Anti-Patterns']
    },
    status: { type: ENUM, values: ['added', 'done'] },
    topic: { type: STRING },
    updateAt: { type: NUMBER, indexed: true }
  }
});

window.__db = db;
