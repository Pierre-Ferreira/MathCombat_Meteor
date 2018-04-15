import PracticePlainMultiplication from './collection';

PracticePlainMultiplication.before.insert((userId, doc) => {
  doc.userId = userId;
  doc.createdAt = Date.now();
});
