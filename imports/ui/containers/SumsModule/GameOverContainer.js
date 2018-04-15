import { connect } from 'react-redux';
import GameOverComp from '../../components/SumsModule/GameOverComp';

function mapStateToProps(state) {
  return {
    numberOfCorrect: state.gameScore.numberOfCorrect,
    percentageCorrect: state.gameScore.percentageCorrect,
  };
}

export default connect(mapStateToProps)(GameOverComp);
