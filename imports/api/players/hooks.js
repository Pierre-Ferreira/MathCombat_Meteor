import Players from './collection';

Players.before.insert((userId, doc) => {
  doc.userId = userId;
  doc.createdAt = Date.now();
  doc.updatedAt = Date.now();
});

Players.before.update((userId, doc) => {
  doc.updatedAt = Date.now();
});
