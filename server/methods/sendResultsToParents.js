import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  sendResultsToParents(to, from, subject, text) {
    // Make sure that all arguments are strings.
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running, without
    // waiting for the email sending to complete.
    this.unblock();

    // Send email to parent.
    const bcc = 'pierre@tektite.biz';
    Email.send({
      to,
      bcc,
      from,
      subject,
      text,
    });
  },
});
