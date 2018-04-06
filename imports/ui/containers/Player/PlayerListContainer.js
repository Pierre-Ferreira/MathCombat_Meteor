import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import PlayerListComp from '../../components/Player/PlayerListComp';
import Players from '../../../api/players/collection';


const mapTrackerToProps = (state, props) => {
  const handle = Meteor.subscribe('players');
  const loggingIn = Meteor.loggingIn();
  return {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
    currentUser: Meteor.user(),
    loading: !handle.ready(),
    players: Players.find({}, {
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

export default connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(PlayerListComp);
