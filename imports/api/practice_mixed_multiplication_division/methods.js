import { Meteor } from 'meteor/meteor';
import PracticeMixedMultiplicationDivision from './collection';
import './hooks';

Meteor.methods({
  'practice_mixed_multiplication_division.create': (data) => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('error', 'Cannot create a new PracticePlainMultiplication entry.', {
        why: 'User not logged in',
      });
    } else {
      PracticeMixedMultiplicationDivision.insert(data, { validate: true });
      console.log('inserted: ', PracticeMixedMultiplicationDivision.find(data).fetch()[0]);
    }
  },
  'practice_mixed_multiplication_division.get': (_id) => {
    return PracticeMixedMultiplicationDivision.find({ _id }).fetch()[0];
  },
});
