import { Mongo } from 'meteor/mongo';
import PracticePlainMultiplicationSchema from './schema';

const PracticePlainMultiplication = new Mongo.Collection('practice_plain_multiplication');

PracticePlainMultiplication.attachSchema(PracticePlainMultiplicationSchema);
export default PracticePlainMultiplication;
