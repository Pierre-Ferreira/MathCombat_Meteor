import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import TablesMainComp from '../../components/TablesModule/TablesMainComp';

const mapTrackerToProps = (state, props) => {
  return {
  };
};

function mapStateToProps(state) {
  return {
    gameStartButtonDisabled: state.gameSettings.gameStartButtonDisabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(TablesMainComp);
