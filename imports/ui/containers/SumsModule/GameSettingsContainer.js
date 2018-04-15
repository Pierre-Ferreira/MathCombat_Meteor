import { connect } from 'react-redux';
import GameSettingsComp from '../../components/SumsModule/GameSettingsComp';

function mapStateToProps(state) {
  return {
    gameNoOfQuestions: state.gameSettings.gameNoOfQuestions,
    gameUpperRangeLimit: state.gameSettings.gameUpperRangeLimit,
    gameType: state.gameSettings.gameType,
    gameQuestionTime: state.gameSettings.gameQuestionTime,
    gameInProgress: state.gameSettings.gameInProgress,
    gameStartButtonText: state.gameSettings.gameStartButtonText,
    gameStartButtonDisabled: state.gameSettings.gameStartButtonDisabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveGameSettings: (
      gameNoOfQuestions,
      gameUpperRangeLimit,
      gameType,
      gameQuestionTime,
    ) => dispatch({
      type: 'SAVE_GAME_SETTINGS',
      gameNoOfQuestions,
      gameUpperRangeLimit,
      gameType,
      gameQuestionTime,
    }),
    saveAnswerInfo: answerObject => dispatch({
      type: 'SAVE_ANSWER_INFO',
      answerObject,
    }),
    updateCurrentAnswer: currentAnswer => dispatch({ type: 'UPDATE_CURRENT_ANSWER', currentAnswer }),
    saveGameScore: (numberOfCorrect, percentageCorrect) => dispatch({ type: 'SAVE_GAME_SCORE', numberOfCorrect, percentageCorrect }),
    startGame: () => dispatch({ type: 'START_GAME' }),
    endGame: () => dispatch({ type: 'END_GAME' }),
    clearGame: () => dispatch({ type: 'CLEAR_GAME' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSettingsComp);
