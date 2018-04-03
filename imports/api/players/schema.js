import SimpleSchema from 'simpl-schema';

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
  },
  birthday: {
    type: Date,
    label: 'Birthday',
    optional: false,
  },
  grade: {
    type: SimpleSchema.Integer,
    label: 'Grade',
    optional: false,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

export default PlayersSchema;
