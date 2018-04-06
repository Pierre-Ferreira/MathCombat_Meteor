import PraticePlainMultiplication from './collection';

PraticePlainMultiplication.before.insert((userId, doc) => {
  doc.userId = userId;
  doc.createdAt = Date.now();
});
