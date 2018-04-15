import { connect } from 'react-redux';
import GameScoreComp from '../../components/SumsModule/GameScoreComp';

function mapStateToProps(state) {
  return {
    numberOfCorrect: state.gameScore.numberOfCorrect,
    percentageCorrect: state.gameScore.percentageCorrect,
  };
}

export default connect(mapStateToProps)(GameScoreComp);
