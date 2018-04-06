import { Mongo } from 'meteor/mongo';
import PraticePlainMultiplicationSchema from './schema';

const PraticePlainMultiplication = new Mongo.Collection('pratice_plain_multiplication');

PraticePlainMultiplication.attachSchema(PraticePlainMultiplicationSchema);
export default PraticePlainMultiplication;
