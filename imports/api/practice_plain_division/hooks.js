import PraticePlainDivision from './collection';

PraticePlainDivision.before.insert((userId, doc) => {
  doc.userId = userId;
  doc.createdAt = Date.now();
});
