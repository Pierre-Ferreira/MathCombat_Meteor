import { connect } from 'react-redux';
import GameScoreComp from '../../components/TablesModule/GameScoreComp';

function mapStateToProps(state) {
  return {
    numberOfCorrect: state.gameScore.numberOfCorrect,
    percentageCorrect: state.gameScore.percentageCorrect,
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

export default connect(mapStateToProps, mapDispatchToProps)(GameScoreComp);
