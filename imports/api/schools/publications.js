// import { Meteor } from 'meteor/meteor';
import Schools from './collection';

Meteor.publish('schools', () => {
  return Schools.find();
});
