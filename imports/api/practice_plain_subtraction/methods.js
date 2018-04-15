import { Meteor } from 'meteor/meteor';
import PracticePlainSubtraction from './collection';
import './hooks';

Meteor.methods({
  'practice_plain_subtraction.create': (data) => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('error', 'Cannot create a new PracticePlainSubtraction entry.', {
        why: 'User not logged in',
      });
    } else {
      PracticePlainSubtraction.insert(data, { validate: true });
      console.log('inserted: ', PracticePlainSubtraction.find(data).fetch()[0]);
    }
  },
  'practice_plain_subtraction.get': (_id) => {
    return PracticePlainSubtraction.find({ _id }).fetch()[0];
  },
});
