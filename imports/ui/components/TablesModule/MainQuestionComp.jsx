import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import QuestionCountdownComp from './QuestionCountdownComp';
// import CurrentQuestionComp from './CurrentQuestionComp'
import CurrentQuestionContainer from '../../containers/TablesModule/CurrentQuestionContainer';

const generateMultiplicationQuestion = ({ lowerLimit, upperLimit, gameTable }) => {
  // Generate a multiplication question.
  let questionOperand1 = '';
  let questionOperand2 = '';
  const questionOperator = 'x';
  let correctAnswer = '';
  let questionTable = '';
  // Generate a random number within the given limits.
  const randomNum = Math.floor(Math.random() * ((upperLimit - lowerLimit) + 1)) + lowerLimit;
  if (gameTable === 'all') {
    // Generate a random gameTable within the given limits.
    questionTable = Math.floor(Math.random() * ((upperLimit - lowerLimit) + 1)) + lowerLimit;
  } else {
    questionTable = gameTable;
  }
  // Calculate the correct answer.
  correctAnswer = randomNum * questionTable;
  // Swap the operands around to convey that multiplication is commutative.
  const randomSwap = Math.floor(Math.random() * 2);
  if (randomSwap) {
    questionOperand1 = questionTable;
    questionOperand2 = randomNum;
  } else {
    questionOperand1 = randomNum;
    questionOperand2 = questionTable;
  }
  return {
    correctAnswer,
    questionOperand1,
    questionOperand2,
    questionOperator,
  };
};


const generatedDivisionQuestion = ({ lowerLimit, upperLimit, gameTable }) => {
  // Generate a division question.
  let questionOperand1 = '';
  const questionOperator = '÷';
  let correctAnswer = '';
  let questionTable = '';
  // Generate a random number within the given limits.
  correctAnswer = Math.floor(Math.random() * ((upperLimit - lowerLimit) + 1)) + lowerLimit;
  if (gameTable === 'all') {
    // Generate a random gameTable within the given limits.
    questionTable = Math.floor(Math.random() * ((upperLimit - lowerLimit) + 1)) + lowerLimit;
  } else {
    questionTable = gameTable;
  }
  // Calculate the correct answer.
  questionOperand1 = correctAnswer * questionTable;
  return {
    correctAnswer,
    questionOperand1,
    questionOperand2: questionTable,
    questionOperator,
  };
};

const generateNewQuestion = ({
  lowerLimit, upperLimit, gameTable, gameType,
}) => {
  const questionGeneratorArguments = {
    lowerLimit,
    upperLimit,
    gameTable,
  };
  let questionGeneratedObj = {};
  if (gameType === 'pratice_plain_multiplication') {
    // Create a multiplication question.
    questionGeneratedObj = generateMultiplicationQuestion(questionGeneratorArguments);
  } else if (gameType === 'pratice_plain_division') {
    // Create a division question.
    questionGeneratedObj = generatedDivisionQuestion(questionGeneratorArguments);
  } else if (gameType === 'practice_mixed_multiplication_division') {
    // Generate a random boolean to determine multiplication of division.
    const randomBoolean = Math.floor(Math.random() * 2);
    if (randomBoolean) {
      // Create a multiplication question.
      questionGeneratedObj = generateMultiplicationQuestion(questionGeneratorArguments);
    } else {
      // Create a division question.
      questionGeneratedObj = generatedDivisionQuestion(questionGeneratorArguments);
    }
  } else {
    questionGeneratedObj = {};
  }
  return questionGeneratedObj;
};

class MainQuestionComp extends Component {
  constructor(props) {
    super(props);
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
    this.evaluateAnswer = this.evaluateAnswer.bind(this);
    this.generateQuestionCheck = this.generateQuestionCheck.bind(this);
    this.restartTimer = this.restartTimer.bind(this);
    this.endGame = this.endGame.bind(this);
    this.tick = this.tick.bind(this);
    const { gameQuestionTime } = this.props;
    this.state = {
      timerCount: gameQuestionTime,
      gameQuestionTime,
      totalNoOfQuestions: this.props.gameNoOfQuestions,
      questionId: 0,
      gameTable: this.props.gameTable,
      // gameType: this.props.gameType,
      questionOperand1: '',
      questionOperand2: '',
      questionOperator: '',
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
    // this.props.clearGame();
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
    const { questionOperator } = this.state;
    const { correctAnswer } = this.state;
    // If no answer was given then make it an underscore.
    const answerGiven = (this.props.currentAnswer === '') ? '_' : this.props.currentAnswer;
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
        lowerLimit: 0,
        upperLimit: 12,
        gameTable: this.state.gameTable,
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
      // End the game.
      this.endGame();
    }
  }

  endGame() {
    // Clear the timer.
    clearInterval(this.timer);
    // Call the action to update game's end in REDUX.
    this.props.endGame();
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
  gameNoOfQuestions: PropTypes.number.isRequired,
  numberOfCorrect: PropTypes.number.isRequired,
  gameTable: PropTypes.number.isRequired,
  gameQuestionTime: PropTypes.number.isRequired,
  gameType: PropTypes.string.isRequired,
  currentAnswer: PropTypes.number.isRequired,
  saveAnswerInfo: PropTypes.func.isRequired,
  saveGameScore: PropTypes.func.isRequired,
  updateCurrentAnswer: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,
  clearGame: PropTypes.func.isRequired,
};

export default MainQuestionComp;
