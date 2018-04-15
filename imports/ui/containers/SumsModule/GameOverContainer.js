import { connect } from 'react-redux';
import GameOverComp from '../../components/SumsModule/GameOverComp';

function mapStateToProps(state) {
  return {
    numberOfCorrect: state.gameScore.numberOfCorrect,
    percentageCorrect: state.gameScore.percentageCorrect,
    gameNoOfQuestions: state.gameSettings.gameNoOfQuestions,
    gameUpperRangeLimit: state.gameSettings.gameUpperRangeLimit,
    gameType: state.gameSettings.gameType,
    gameQuestionTime: state.gameSettings.gameQuestionTime,
    gameAnswers: state.gameAnswers,
    playerID: state.playerInfo._id,
    playerName: state.playerInfo.name,
    parentEmail: Meteor.user().emails[0].address,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // startGame: () => dispatch({ type: 'START_GAME' }),
    // endGame: () => dispatch({ type: 'END_GAME' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOverComp);
