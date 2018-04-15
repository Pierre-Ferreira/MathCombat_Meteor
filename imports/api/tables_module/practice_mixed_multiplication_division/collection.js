import { Mongo } from 'meteor/mongo';
import PracticeMixedMultiplicationDivisionSchema from './schema';

const PracticeMixedMultiplicationDivision = new Mongo.Collection('practice_mixed_multiplication_division');

PracticeMixedMultiplicationDivision.attachSchema(PracticeMixedMultiplicationDivisionSchema);
export default PracticeMixedMultiplicationDivision;
