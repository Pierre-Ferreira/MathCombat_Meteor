import PracticeMixedMultiplicationDivision from './collection';

PracticeMixedMultiplicationDivision.before.insert((userId, doc) => {
  doc.userId = userId;
  doc.createdAt = Date.now();
});
