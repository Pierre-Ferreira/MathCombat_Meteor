import { Meteor } from 'meteor/meteor';
/* Imports for server-side startup go here. */
import '../../api/players/methods';
import '../../api/players/publications';
import '../../api/schools/methods';
import '../../api/schools/publications';
import '../../api/practice_plain_multiplication/methods';

// process.env.MAIL_URL = "smtps://postmaster%40<your-mailgun-address>.mailgun.org:password@smtp.mailgun.org:587";
