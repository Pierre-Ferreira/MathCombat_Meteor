import { Meteor } from 'meteor/meteor';
import Players from './collection';
import './hooks';

Meteor.methods({
  'player.create': (data) => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('error', 'Cannot create a new player', {
        why: 'User not logged in',
      });
    } else {
      Players.insert(data, { validate: false });
      console.log('inserted: ', Players.find(data).fetch()[0]);
    }
  },
  'player.get': (_id) => {
    return Players.find({ _id }).fetch()[0];
  },
  'player.edit': (_id, data) => {
    const player = Players.find({ _id }).fetch()[0];
    if (Meteor.userId() !== player.userId) {
      throw new Meteor.Error('error', 'Cannot edit the player', {
        why: 'User does not own the player',
      });
    } else {
      Players.update({ _id }, {
        $set: data,
      });
    }
  },
  'player.remove': (_id) => {
    const player = Players.find({ _id }).fetch()[0];
    if (Meteor.userId() !== player.userId) {
      throw new Meteor.Error('error', 'Cannot delete the player', {
        why: 'User does not own the player',
      });
    } else {
      Players.remove({ _id });
    }
  },
});
