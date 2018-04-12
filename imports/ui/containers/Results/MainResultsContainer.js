import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import MainResultsComp from '../../components/Results/MainResultsComp';
import Players from '../../../api/players/collection';


const mapTrackerToProps = (state, props) => {
  const loggingIn = Meteor.loggingIn();
  return {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
    currentUser: Meteor.user(),
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

export default connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(MainResultsComp);
