import { connect } from 'react-redux';
import QuestionsResultsComp from '../../components/SumsModule/QuestionsResultsComp';

function mapStateToProps(state) {
  return {
    gameAnswers: state.gameAnswers,
    currentAnswer: state.gameCurrentAnswer.currentAnswer,
    // questionOperator: state.gameSettings.questionOperator,
  };
}

export default connect(mapStateToProps)(QuestionsResultsComp);
