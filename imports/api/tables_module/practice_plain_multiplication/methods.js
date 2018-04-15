import { Meteor } from 'meteor/meteor';
import PracticePlainMultiplication from './collection';
import './hooks';

Meteor.methods({
  'practice_plain_multiplication.create': (data) => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('error', 'Cannot create a new PracticePlainMultiplication entry.', {
        why: 'User not logged in',
      });
    } else {
      PracticePlainMultiplication.insert(data, { validate: true });
      console.log('inserted: ', PracticePlainMultiplication.find(data).fetch()[0]);
    }
  },
  'practice_plain_multiplication.get': (_id) => {
    return PracticePlainMultiplication.find({ _id }).fetch()[0];
  },
});
