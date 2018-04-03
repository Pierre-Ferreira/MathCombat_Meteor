// import { Meteor } from 'meteor/meteor';
import Players from './collection';

Meteor.publish('players', () => {
  return Players.find();
});
