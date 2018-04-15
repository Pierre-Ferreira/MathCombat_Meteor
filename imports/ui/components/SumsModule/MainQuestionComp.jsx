import React from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import QuestionCountdownComp from './QuestionCountdownComp';
// import CurrentQuestionComp from './CurrentQuestionComp'
import CurrentQuestionContainer from '../../containers/SumsModule/CurrentQuestionContainer';

const generateAdditionQuestion = ({ gameUpperRangeLimit }) => {
  // Generate a addition question.
  let questionOperand1 = '';
  let questionOperand2 = '';
  const questionOperator = '+';
  let correctAnswer = '';
  // Generate a random Operand within the given limits.
  questionOperand1 = Math.floor(Math.random() * ((gameUpperRangeLimit - 0) + 1)) + 0;
  // Generate a random Operand within the given limits.
  questionOperand2 = Math.floor(Math.random() * ((gameUpperRangeLimit - 0) + 1)) + 0;
  // Calculate the correct answer.
  correctAnswer = questionOperand1 + questionOperand2;
  return {
    correctAnswer,
    questionOperand1,
    questionOperand2,
    questionOperator,
  };
};


const generatedSubtractQuestion = ({ gameUpperRangeLimit }) => {
  // Generate a subraction question.
  let questionOperand1 = '';
  let questionOperand2 = '';
  let correctAnswer = '';
  const questionOperator = '-';
  // Generate a random Operand within the given limits.
  questionOperand1 = Math.floor(Math.random() * ((gameUpperRangeLimit - 0) + 1)) + 0;
  // Generate a random Operand within the given limits.
  questionOperand2 = Math.floor(Math.random() * ((questionOperand1 - 0) + 1)) + 0;
  // Calculate the correct answer.
  correctAnswer = questionOperand1 - questionOperand2;
  return {
    correctAnswer,
    questionOperand1,
    questionOperand2,
    questionOperator,
  };
};

const generateNewQuestion = ({
  gameUpperRangeLimit, gameType,
}) => {
  const questionGeneratorArguments = {
    gameUpperRangeLimit,
  };
  let questionGeneratedObj = {};
  if (gameType === 'practice_plain_addition') {
    // Create a addition question.
    questionGeneratedObj = generateAdditionQuestion(questionGeneratorArguments);
  } else if (gameType === 'practice_plain_subtraction') {
    // Create a subraction question.
    questionGeneratedObj = generatedSubtractQuestion(questionGeneratorArguments);
  } else if (gameType === 'practice_mixed_addition_subtraction') {
    // Generate random operands with a random operator within the given limits.
    const randomBoolean = Math.floor(Math.random() * 2);
    if (randomBoolean) {
      // Create a addition question.
      questionGeneratedObj = generateAdditionQuestion(questionGeneratorArguments);
    } else {
      // Create a subtraction question.
      questionGeneratedObj = generatedSubtractQuestion(questionGeneratorArguments);
    }
  } else {
    questionGeneratedObj = {};
  }
  return questionGeneratedObj;
};

class MainQuestionComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
    this.evaluateAnswer = this.evaluateAnswer.bind(this);
    this.generateQuestionCheck = this.generateQuestionCheck.bind(this);
    this.restartTimer = this.restartTimer.bind(this);
    this.tick = this.tick.bind(this);
    const { gameQuestionTime } = this.props;
    this.state = {
      timerCount: gameQuestionTime,
      gameQuestionTime,
      totalNoOfQuestions: this.props.gameNoOfQuestions,
      questionId: 0,
      gameUpperRangeLimit: this.props.gameUpperRangeLimit,
      questionOperand1: '',
      questionOperand2: '',
      correctAnswer: '',
      playWrongAnswerSound: false,
    };
  }

  componentDidMount() {
    // componentDidMount is called by react when the component
    // has been rendered on the page. We can set the interval here:
    this.timer = setInterval(this.tick, 100);
    // Check if a new question must be generated.
    this.generateQuestionCheck();
  }

  componentWillUnmount() { // TODO: DO componentWillUnmount FOR ALL COMPONENTS.
    // This method is called immediately before the component is removed
    // from the page and destroyed. We can clear the interval here:
    clearInterval(this.timer);
  }

  tick() {
    // This function is called every 500 ms. It updates the timerCount.
    // Calling setState causes the component to be re-rendered
    const timerCount = this.state.gameQuestionTime -
                              Math.trunc((new Date() - this.startTime) / 1000);
    // console.log(this.gameQuestionTime)
    // console.log(timerCount)
    this.setState({ timerCount });
    if (timerCount <= 0) {
      this.evaluateAnswer();
    }
  }

  evaluateAnswer() {
    // Check if the answer is correct.
    let answeredCorrectly = 'false';
    this.setState({ playWrongAnswerSound: false });
    if (this.state.correctAnswer === this.props.currentAnswer) {
      answeredCorrectly = true;
    } else {
      answeredCorrectly = false;
      this.setState({ playWrongAnswerSound: true });
    }
    const { questionId } = this.state;
    const { questionOperand1 } = this.state;
    const { questionOperand2 } = this.state;
    const { correctAnswer } = this.state;
    const { questionOperator } = this.state;
    const answerGiven = this.props.currentAnswer;
    // Save the answer info.
    const answerObject = {
      questionId,
      questionOperand1,
      questionOperand2,
      questionOperator,
      correctAnswer,
      answerGiven,
      answeredCorrectly,
    };
    // Calculate the game's score.
    let { numberOfCorrect } = this.props;
    if (answeredCorrectly) {
      numberOfCorrect += 1;
    }
    const percentageCorrect = Math.round((numberOfCorrect / questionId) * 100);
    this.props.saveGameScore(numberOfCorrect, percentageCorrect);
    this.props.saveAnswerInfo(answerObject);
    // Check if a new question must be generated.
    this.generateQuestionCheck();
  }

  generateQuestionCheck() {
    // Clear the current answer.
    this.props.updateCurrentAnswer('');
    // Check if more questions need to be asked.
    if (this.state.questionId < this.state.totalNoOfQuestions) {
      // Call the function
      let questionGeneratedObj = {};
      const questionGeneratorArguments = {
        gameUpperRangeLimit: this.state.gameUpperRangeLimit,
        gameType: this.props.gameType,
      };
      questionGeneratedObj = generateNewQuestion(questionGeneratorArguments);
      // Extract the new question info.
      const {
        correctAnswer,
        questionOperand1,
        questionOperand2,
        questionOperator,
      } = questionGeneratedObj;
      // Update the state with the question generated.
      this.setState({ correctAnswer });
      this.setState({ questionOperand1 });
      this.setState({ questionOperand2 });
      this.setState({ questionOperator });
      // Set the questionId.
      this.setState({ questionId: this.state.questionId + 1 });
      // Restart the timer.
      this.restartTimer();
    } else {
      // Clear the timer.
      clearInterval(this.timer);
      // End the game.
      this.props.endGame();
    }
  }

  restartTimer() {
    // Set the start time.
    this.startTime = new Date();
  }

  handleAnswerSubmit(e) {
    e.preventDefault();
    // Evaluate the answer.
    this.evaluateAnswer();
  }

  render() {
    let soundStatus = Sound.status.STOP;
    if (this.state.playWrongAnswerSound) {
      soundStatus = Sound.status.PLAYING;
    } else {
      soundStatus = Sound.status.STOP;
    }
    return (
      <section id="main-question-area">
        <QuestionCountdownComp timerCount={this.state.timerCount} />
        <CurrentQuestionContainer
          questionId={this.state.questionId}
          questionOperand1={this.state.questionOperand1}
          questionOperator={this.state.questionOperator}
          questionOperand2={this.state.questionOperand2}
          onSubmitFn={this.handleAnswerSubmit}
        />
        <Sound
          url="sounds/Wrong Answer Alarm Buzzer.wav"
          playStatus={soundStatus}
        />
      </section>
    );
  }
}
MainQuestionComp.propTypes = {
  currentAnswer: PropTypes.number.isRequired,
  gameQuestionTime: PropTypes.number.isRequired,
  gameNoOfQuestions: PropTypes.number.isRequired,
  numberOfCorrect: PropTypes.number.isRequired,
  gameUpperRangeLimit: PropTypes.number.isRequired,
  gameType: PropTypes.string.isRequired,
  saveGameScore: PropTypes.func.isRequired,
  saveAnswerInfo: PropTypes.func.isRequired,
  updateCurrentAnswer: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,
};


export default MainQuestionComp;
