import { Mongo } from 'meteor/mongo';
import playersSchema from './schema';

const Players = new Mongo.Collection('players');

Players.attachSchema(playersSchema);
export default Players;
