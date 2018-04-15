import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { publishComposite } from 'meteor/reywood:publish-composite';
import PracticePlainMultiplication from '../tables_module/practice_plain_multiplication/collection';
import PraticePlainDivision from '../tables_module/practice_plain_division/collection';
import PracticeMixedMultiplicationDivision from '../tables_module/practice_mixed_multiplication_division/collection';

// Return all the players for this user (parent).
Meteor.publish('practice_games_results', (playerID) => {
  console.log('PUB playerID:',playerID)
  check(playerID, String);
  return [
    PracticePlainMultiplication.find({ playerID }),
    PraticePlainDivision.find({ playerID }),
    PracticeMixedMultiplicationDivision.find({ playerID }),
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
