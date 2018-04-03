import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import PlayerSelectComp from '../../components/Player/PlayerSelectComp';
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
    setPlayerID: playerID => dispatch({ type: 'SET_PLAYER_ID', playerID }),
  };
}

export default connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(PlayerSelectComp);
