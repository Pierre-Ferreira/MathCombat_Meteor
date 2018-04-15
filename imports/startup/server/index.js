import { Meteor } from 'meteor/meteor';
/* Imports for server-side startup go here. */
// Players.
import '../../api/players/methods';
import '../../api/players/publications';
// Schools.
import '../../api/schools/methods';
import '../../api/schools/publications';
// Tables module.
import '../../api/tables_module/practice_plain_multiplication/methods';
import '../../api/tables_module/practice_plain_division/methods';
import '../../api/tables_module/practice_mixed_multiplication_division/methods';
// Sums module.
import '../../api/sums_module/practice_plain_subtraction/methods';
import '../../api/sums_module/practice_plain_addition/methods';
import '../../api/sums_module/practice_mixed_addition_subtraction/methods';
// .
import '../../api/multi_collections/player_practice_results';
