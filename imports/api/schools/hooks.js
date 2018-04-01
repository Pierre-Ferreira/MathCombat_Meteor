import Schools from './collection';

Schools.before.insert((userId, doc) => {
  doc.userId = userId;
  doc.createdAt = Date.now();
  doc.updatedAt = Date.now();
});

Schools.before.update((userId, doc) => {
  doc.updatedAt = Date.now();
});
