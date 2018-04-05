import { connect } from 'react-redux';
import GameInteractionComp from '../../components/TablesModule/GameInteractionComp';

function mapStateToProps(state) {
  return {
    numberOfCorrect: state.gameScore.numberOfCorrect,
    percentageCorrect: state.gameScore.percentageCorrect,
    gameInProgress: state.gameSettings.gameInProgress,
    displayWelcomeScreen: state.gameSettings.displayWelcomeScreen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startGame: () => dispatch({ type: 'START_GAME' }),
    endGame: () => dispatch({ type: 'END_GAME' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInteractionComp);
