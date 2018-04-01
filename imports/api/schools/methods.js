import { Meteor } from 'meteor/meteor';
import Schools from './collection';
import './hooks';

Meteor.methods({
  'school.create': (data) => {
    if (!Meteor.userId) {
      throw new Meteor.Error('error', 'Cannot create a new school', {
        why: 'User not logged in',
      });
    } else {
      Schools.insert(data, { validate: false });
      console.log('inserted: ', Schools.find(data).fetch()[0]);
    }
  },
  'school.get': (_id) => {
    return Schools.find({ _id }).fetch()[0];
  },
  'school.edit': (_id, data) => {
    const school = Schools.find({ _id }).fetch()[0];
    if (Meteor.userId !== school.userId) {
      throw new Meteor.Error('error', 'Cannot edit the school', {
        why: 'User does not own the school',
      });
    } else {
      Schools.update({ _id }, {
        $set: data,
      });
    }
  },
  'school.remove': (_id) => {
    const school = Schools.find({ _id }).fetch()[0];
    if (Meteor.userId !== school.userId) {
      throw new Meteor.Error('error', 'Cannot delete the school', {
        why: 'User does not own the school',
      });
    } else {
      Schools.remove({ _id });
    }
  },
});
