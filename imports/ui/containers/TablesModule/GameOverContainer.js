import { connect } from 'react-redux';
import GameOverComp from '../../components/TablesModule/GameOverComp';

function mapStateToProps(state) {
  return {
    numberOfCorrect: state.gameScore.numberOfCorrect,
    percentageCorrect: state.gameScore.percentageCorrect,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // startGame: () => dispatch({ type: 'START_GAME' }),
    // endGame: () => dispatch({ type: 'END_GAME' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOverComp);
