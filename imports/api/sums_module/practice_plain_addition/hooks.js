import PracticePlainAddition from './collection';

PracticePlainAddition.before.insert((userId, doc) => {
  doc.userId = userId;
  doc.createdAt = Date.now();
});
