import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import PracticeResultsComp from '../../components/Results/PracticeResultsComp';
import PracticePlainMultiplication from '../../../api/practice_plain_multiplication/collection';


const mapTrackerToProps = (state, props) => {
  console.log('state.playerInfo._id:', state.playerInfo._id);
  const handle = Meteor.subscribe('practice_plain_multiplication', state.playerInfo._id);
  console.log('handle:', handle);
  const loggingIn = Meteor.loggingIn();
  return {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
    currentUser: Meteor.user(),
    loading: !handle.ready(),
    PracticePlainMultiplicationCursor: PracticePlainMultiplication.find({}, {
      sort: { createdAt: -1 },
    }).fetch(),
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
