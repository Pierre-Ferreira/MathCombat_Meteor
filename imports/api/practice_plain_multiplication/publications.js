import { Meteor } from 'meteor/meteor';
import PracticePlainMultiplication from './collection';

// Return all the players for this user (parent).
Meteor.publish('practice_plain_multiplication', (playerID) => {
  console.log('PUB playerID:',playerID)
  return PracticePlainMultiplication.find({ playerID });
});
