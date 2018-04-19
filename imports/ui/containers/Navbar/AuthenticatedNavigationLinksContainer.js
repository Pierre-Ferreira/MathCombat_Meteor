import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import { push } from 'react-router-redux';
import AuthenticatedNavigationLinksComp from '../../components/Navbar/AuthenticatedNavigationLinksComp';

const mapTrackerToProps = (state, props) => {
  const loggingIn = Meteor.loggingIn();
  const currentUserEmail= Meteor.user().emails[0].address;
  return {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
    currentUser: Meteor.user(),
    userIsAdmin: (currentUserEmail === 'pdferreira777@gmail.com'),
  };
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toHomepage: () => dispatch(push('/')),
  };
}

export default connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(AuthenticatedNavigationLinksComp);
