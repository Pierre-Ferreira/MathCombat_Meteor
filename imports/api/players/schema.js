import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import Schools from '../schools/collection';

//TODO Use schools collection to fill schools selection options.
//TODO Date of birth should be DD/MM/YYYY (i.e. ignore time).
const schools = Schools.find({}).fetch();
console.log('schools:',schools);

const PlayersSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    optional: false,
  },
  surname: {
    type: String,
    label: 'Surname',
    optional: false,
  },
  school: {
    type: String,
    label: 'School',
    optional: false,
    allowedValues: ['Hennopspark', 'Piet Retief', 'Other'],
    // allowedValues: () => {
    //   schools.map(school => {
    //     return school.name
    //   });
    // },
    // autoform: {
    //   options: ['Hens', 'Pens'],
    // },
  },
  birthday: {
    type: Date,
    label: 'Date of birth',
    optional: false,
  },
  grade: {
    type: SimpleSchema.Integer,
    label: 'Grade',
    optional: false,
  },
  createdAt: {
    type: Date,
    optional: true,
  },
  updatedAt: {
    type: Date,
    optional: true,
  },
});

export default PlayersSchema;
