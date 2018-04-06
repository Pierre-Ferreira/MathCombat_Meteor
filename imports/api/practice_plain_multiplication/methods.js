import { Meteor } from 'meteor/meteor';
import PraticePlainMultiplication from './collection';
import './hooks';

Meteor.methods({
  'pratice_plain_multiplication.create': (data) => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('error', 'Cannot create a new PraticePlainMultiplication entry.', {
        why: 'User not logged in',
      });
    } else {
      PraticePlainMultiplication.insert(data, { validate: true });
      console.log('inserted: ', PraticePlainMultiplication.find(data).fetch()[0]);
    }
  },
  'pratice_plain_multiplication.get': (_id) => {
    return PraticePlainMultiplication.find({ _id }).fetch()[0];
  },
});
