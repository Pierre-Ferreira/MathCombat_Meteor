import { Meteor } from 'meteor/meteor';
import PracticeMixedAdditionSubtraction from './collection';
import './hooks';

Meteor.methods({
  'practice_mixed_addition_subtraction.create': (data) => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('error', 'Cannot create a new PracticeMixedAdditionSubtraction entry.', {
        why: 'User not logged in',
      });
    } else {
      PracticeMixedAdditionSubtraction.insert(data, { validate: true });
      console.log('inserted: ', PracticeMixedAdditionSubtraction.find(data).fetch()[0]);
    }
  },
  'practice_mixed_addition_subtraction.get': (_id) => {
    return PracticeMixedAdditionSubtraction.find({ _id }).fetch()[0];
  },
});
