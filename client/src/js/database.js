import { openDB } from 'idb';

const initdb = async () =>
  openDB('textditor', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('textditor')) {
        console.log('textditor database already exists');
        return;
      }
      db.createObjectStore('textditor', { keyPath: 'id', autoIncrement: true });
      console.log('textditor database created');
    },
  });

export const putDb = async (content) => {
  const db = await openDB('textditor', 1)
  content = {content, id: 1}
  const transaction = db.transaction('textditor', 'readwrite')
  const store = transaction.store
  return await store.put(content)
  
};

export const getDb = async () => {
  const db = await openDB('textditor', 1)
  const transaction = db.transaction('textditor', 'readonly')
  const store = transaction.store
  const everything = await store.get(1)
  return everything.content
}

initdb();
