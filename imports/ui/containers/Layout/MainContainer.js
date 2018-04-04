import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import MainPage from '../../components/Layout/MainComp';

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
    playerID: state.playerInfo._id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toLoginPage: () => dispatch(push('/auth/login')),
  };
}

export default withRouter(connect(
  mapTrackerToProps,
  mapStateToProps,
  mapDispatchToProps,
)(MainPage));
