import { Meteor } from 'meteor/meteor';
import PraticePlainDivision from './collection';
import './hooks';

Meteor.methods({
  'pratice_plain_division.create': (data) => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('error', 'Cannot create a new PraticePlainDivision entry.', {
        why: 'User not logged in',
      });
    } else {
      PraticePlainDivision.insert(data, { validate: true });
      console.log('inserted: ', PraticePlainDivision.find(data).fetch()[0]);
    }
  },
  'pratice_plain_division.get': (_id) => {
    return PraticePlainDivision.find({ _id }).fetch()[0];
  },
});
