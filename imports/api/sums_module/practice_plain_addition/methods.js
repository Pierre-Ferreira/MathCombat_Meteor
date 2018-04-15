import { Meteor } from 'meteor/meteor';
import PracticePlainAddition from './collection';
import './hooks';

Meteor.methods({
  'practice_plain_addition.create': (data) => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('error', 'Cannot create a new PracticePlainAddition entry.', {
        why: 'User not logged in',
      });
    } else {
      PracticePlainAddition.insert(data, { validate: true });
      console.log('inserted: ', PracticePlainAddition.find(data).fetch()[0]);
    }
  },
  'practice_plain_addition.get': (_id) => {
    return PracticePlainAddition.find({ _id }).fetch()[0];
  },
});
