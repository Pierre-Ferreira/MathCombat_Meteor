import { Mongo } from 'meteor/mongo';
import PracticePlainSubtractionSchema from './schema';

const PracticePlainSubtraction = new Mongo.Collection('practice_plain_subtraction');

PracticePlainSubtraction.attachSchema(PracticePlainSubtractionSchema);
export default PracticePlainSubtraction;
