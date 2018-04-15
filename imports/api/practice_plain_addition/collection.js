import { Mongo } from 'meteor/mongo';
import PracticePlainAdditionSchema from './schema';

const PracticePlainAddition = new Mongo.Collection('practice_plain_addition');

PracticePlainAddition.attachSchema(PracticePlainAdditionSchema);
export default PracticePlainAddition;
