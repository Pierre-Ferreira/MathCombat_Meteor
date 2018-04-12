import { Mongo } from 'meteor/mongo';
import PraticePlainDivisionSchema from './schema';

const PraticePlainDivision = new Mongo.Collection('practice_plain_division');

PraticePlainDivision.attachSchema(PraticePlainDivisionSchema);
export default PraticePlainDivision;
