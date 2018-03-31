import { Meteor } from 'meteor/meteor';
import Schools from '../../imports/api/schools/schools';

Meteor.startup(() => {
  Meteor.methods({
    insertSchool(school) {
      Schools.insert(school);
    },
  });
});
