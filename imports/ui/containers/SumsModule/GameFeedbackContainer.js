import { connect } from 'react-redux';
import GameFeedbackComp from '../../components/SumsModule/GameFeedbackComp';

function mapStateToProps(state) {
  return {
    gameAnswers: state.gameAnswers,
    currentAnswer: state.currentAnswer,
    gameType: state.gameSettings.gameType,
  };
}

export default connect(mapStateToProps)(GameFeedbackComp);
