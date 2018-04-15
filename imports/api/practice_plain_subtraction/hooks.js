import PracticePlainSubtraction from './collection';

PracticePlainSubtraction.before.insert((userId, doc) => {
  doc.userId = userId;
  doc.createdAt = Date.now();
});
