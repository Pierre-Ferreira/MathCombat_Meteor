import { Meteor } from 'meteor/meteor';
import Players from './collection';

// Return all the players for this user (parent).
Meteor.publish('players', () => {
  return Players.find({ userId: Meteor.userId() });
});
