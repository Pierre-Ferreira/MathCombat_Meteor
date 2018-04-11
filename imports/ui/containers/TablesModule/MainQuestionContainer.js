import { connect } from 'react-redux';
import MainQuestionComp from '../../components/TablesModule/MainQuestionComp';

function mapStateToProps(state) {
  return {
    currentAnswer: state.gameCurrentAnswer.currentAnswer,
    numberOfCorrect: state.gameScore.numberOfCorrect,
    percentageCorrect: state.gameScore.percentageCorrect,
    gameNoOfQuestions: state.gameSettings.gameNoOfQuestions,
    gameTable: state.gameSettings.gameTable,
    gameType: state.gameSettings.gameType,
    gameQuestionTime: state.gameSettings.gameQuestionTime,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveAnswerInfo: answerObject => dispatch({
      type: 'SAVE_ANSWER_INFO',
      answerObject,
    }),
    updateCurrentAnswer: currentAnswer => dispatch({ type: 'UPDATE_CURRENT_ANSWER', currentAnswer }),
    saveGameScore: (numberOfCorrect, percentageCorrect) => dispatch({ type: 'SAVE_GAME_SCORE', numberOfCorrect, percentageCorrect }),
    startGame: () => dispatch({ type: 'START_GAME' }),
    endGame: () => dispatch({ type: 'END_GAME' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainQuestionComp);
