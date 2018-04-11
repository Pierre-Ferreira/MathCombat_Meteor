import { connect } from 'react-redux';
import GameFeedbackComp from '../../components/TablesModule/GameFeedbackComp';

function mapStateToProps(state) {
  return {
    currentAnswer: state.currentAnswer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameFeedbackComp);
