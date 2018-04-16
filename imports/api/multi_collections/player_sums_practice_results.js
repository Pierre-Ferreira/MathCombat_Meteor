import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { publishComposite } from 'meteor/reywood:publish-composite';
import PracticePlainAddition from '../sums_module/practice_plain_addition/collection';
import PracticePlainSubtraction from '../sums_module/practice_plain_subtraction/collection';
import PracticeMixedAdditionSubtraction from '../sums_module/practice_mixed_addition_subtraction/collection';

// Return all the players for this user (parent).
Meteor.publish('practice_sums_results', (playerID) => {
  console.log('PUB playerID:',playerID)
  check(playerID, String);
  return [
    PracticePlainAddition.find({ playerID }),
    PracticePlainSubtraction.find({ playerID }),
    PracticeMixedAdditionSubtraction.find({ playerID }),
  ];
});
// return {
//   find() {
//     PracticePlainMultiplication.find({ playerID });
//   },
//   children: [
//     {
//       find() {
//         PraticePlainDivision.find({ playerID });
//       },
//     },
//     {
//       find() {
//         PracticeMixedMultiplicationDivision.find({ playerID });
//       },
//     },
//   ],
// };
