import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import SchoolListComp from '../../components/Admin/SchoolListComp';
import Schools from '../../../api/schools/collection';


const mapTrackerToProps = (state, props) => {
  const handle = Meteor.subscribe('schools');
  const loggingIn = Meteor.loggingIn();
  return {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
    currentUser: Meteor.user(),
    loading: !handle.ready(),
    schools: Schools.find({}, {
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

export default connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(SchoolListComp);
