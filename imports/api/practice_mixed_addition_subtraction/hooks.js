import PracticeMixedAdditionSubtraction from './collection';

PracticeMixedAdditionSubtraction.before.insert((userId, doc) => {
  doc.userId = userId;
  doc.createdAt = Date.now();
});
