import { connect } from 'react-redux';
import CurrentQuestionComp from '../../components/TablesModule/CurrentQuestionComp';

function mapStateToProps(state) {
  return {
    currentAnswer: state.currentAnswer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCurrentAnswer: currentAnswer => dispatch({ type: 'UPDATE_CURRENT_ANSWER', currentAnswer }),
    // onEmailChanged: (email) => dispatch({ type: 'EMAIL_CHANGED', payload: email }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentQuestionComp)
