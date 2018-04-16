import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import PracticeSumsResultsComp from '../../../components/Results/SumsResults/PracticeSumsResultsComp';
import PracticePlainAddition from '../../../../api/sums_module/practice_plain_addition/collection';
import PracticePlainSubtraction from '../../../../api/sums_module/practice_plain_subtraction/collection';
import PracticeMixedAdditionSubtraction from '../../../../api/sums_module/practice_mixed_addition_subtraction/collection';

const mapTrackerToProps = (state, props) => {
  const playerID = state.playerInfo._id;
  // Subscribe to the practice game results publication.
  const handle = Meteor.subscribe('practice_sums_results', playerID);
  // Fetch the multiplication practice result. Always be specific in your subsription fetch!
  const PracticePlainSubtractionCursor = PracticePlainSubtraction.find({ playerID }).fetch();
  // Fetch the division practice result.  Always be specific in your subsription fetch!
  const PracticePlainAdditionCursor = PracticePlainAddition.find({ playerID }).fetch();
  // Fetch the division practice result.  Always be specific in your subsription fetch!
  const PracticeMixedAdditionSubtractionCursor = PracticeMixedAdditionSubtraction.find({ playerID }).fetch();
  // Merge all the fetched results.
  const PracticeResultsCursor = PracticePlainAdditionCursor.concat(
    PracticePlainSubtractionCursor,
    PracticeMixedAdditionSubtractionCursor,
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

export default connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(PracticeSumsResultsComp);
