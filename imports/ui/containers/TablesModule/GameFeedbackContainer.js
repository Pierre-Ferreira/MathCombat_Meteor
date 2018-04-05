import { connect } from 'react-redux';
import GameFeedbackComp from '../../components/TablesModule/GameFeedbackComp';

function mapStateToProps(state) {
  return {
    gameAnswers: state.gameAnswers,
    currentAnswer: state.currentAnswer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // saveAnswerInfo: answerObject => dispatch({
    //   type: 'SAVE_ANSWER_INFO',
    //   answerObject,
    // }),
    // onEmailChanged: (email) => dispatch({ type: 'EMAIL_CHANGED', payload: email }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameFeedbackComp);
