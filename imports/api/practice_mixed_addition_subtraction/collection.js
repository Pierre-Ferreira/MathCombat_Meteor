import { Mongo } from 'meteor/mongo';
import PracticeMixedAdditionSubtractionSchema from './schema';

const PracticeMixedAdditionSubtraction = new Mongo.Collection('practice_mixed_addition_subtraction');

PracticeMixedAdditionSubtraction.attachSchema(PracticeMixedAdditionSubtractionSchema);
export default PracticeMixedAdditionSubtraction;
