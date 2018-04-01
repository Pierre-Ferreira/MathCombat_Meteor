import { Mongo } from 'meteor/mongo';
import schoolsSchema from './schema';

const Schools = new Mongo.Collection('schools');
Schools.attachSchema(schoolsSchema);
export default Schools;
