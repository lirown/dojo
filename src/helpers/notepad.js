import { db } from '../app.db';

export const sections = [
  'Responsibilities',
  'Examples',
  'Anti-Patterns',
  'Resources'
];

function getStatus(notepad, key, fallback = 'work') {
  if (!notepad || !notepad[key]) {
    return fallback;
  }
  return (notepad[key][0] || notepad[key] || {}).status;
}

async function changeStatus(notepad, key, section, topic, callback = () => {}) {
  const currentStatus = getStatus(notepad, key);
  const item = Array.isArray(notepad[key]) ? notepad[key][0] : notepad[key];

  if (currentStatus === 'done') {
    return db.remove(key).then(callback);
  }
  const status =
    currentStatus === 'work'
      ? 'added'
      : currentStatus === 'added'
      ? 'done'
      : 'work';

  await db.create(key, {
    section,
    topic,
    status,
    key,
    updatedAt: Date.now()
  });

  callback();
  // update UI
}

export { getStatus, changeStatus };
