import SimpleSchema from 'simpl-schema';

const SchoolsSchema = new SimpleSchema({
  name: {
    type: String,
    optional: false,
  },
  address: {
    type: String,
    optional: false,
  },
  suburb: {
    type: String,
    optional: false,
  },
  city: {
    type: String,
    optional: false,
  },
  country: {
    type: String,
    optional: true,
  },
  type: {
    type: String,
    allowedValues: ['Primary', 'Secondary', 'Other'],
    optional: true,
  },
  website: {
    type: String,
    // regEx: SimpleSchema.RegEx.Url,
    optional: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

export default SchoolsSchema;
