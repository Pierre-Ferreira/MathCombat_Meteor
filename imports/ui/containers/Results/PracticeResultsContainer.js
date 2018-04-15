import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import PracticeResultsComp from '../../components/Results/PracticeResultsComp';
import PracticePlainMultiplication from '../../../api/practice_plain_multiplication/collection';
import PraticePlainDivision from '../../../api/practice_plain_division/collection';
import PracticeMixedMultiplicationDivision from '../../../api/practice_mixed_multiplication_division/collection';

const mapTrackerToProps = (state, props) => {
  const playerID = state.playerInfo._id;
  // Subscribe to the practice game results publication.
  const handle = Meteor.subscribe('practice_games_results', playerID);
  // Fetch the multiplication practice result. Always be specific in your subsription fetch!
  const PracticePlainMultiplicationCursor = PracticePlainMultiplication.find({ playerID }).fetch();
  // Fetch the division practice result.  Always be specific in your subsription fetch!
  const PracticePlainDivisionCursor = PraticePlainDivision.find({ playerID }).fetch();
  // Fetch the division practice result.  Always be specific in your subsription fetch!
  const PracticeMixedMultiplicationDivisionCursor = PracticeMixedMultiplicationDivision.find({ playerID }).fetch();
  // Merge all the fetched results.
  const PracticeResultsCursor = PracticePlainMultiplicationCursor.concat(
    PracticePlainDivisionCursor,
    PracticeMixedMultiplicationDivisionCursor,
  );
  // Sort all the results by date.
  PracticeResultsCursor.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });
  const loggingIn = Meteor.loggingIn();
  return {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
    currentUser: Meteor.user(),
    loading: !handle.ready(),
    PracticeResultsCursor,
  };
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(PracticeResultsComp);
