import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import './GameOverComp.css';

const writeGameToDB = (props) => {
  // Setup data to write to DB.
  const dataDB = {
    playerID: props.playerID,
    gameType: props.gameType,
    gameTable: props.gameTable,
    gameNoOfQuestions: props.gameNoOfQuestions,
    gameQuestionTime: props.gameQuestionTime,
    numberOfCorrect: props.numberOfCorrect,
    percentageCorrect: props.percentageCorrect,
    gameAnswers: props.gameAnswers,
  };
  console.log('dataDB:',dataDB);
  const methodName = `${props.gameType}.create`
  Meteor.call(methodName, dataDB, (err, res) => {
    if (err) {
      console.log('err:',err);
    } else {
      console.log('res9:',res);
    }
  });
};

const emailResultToParent = (props) => {
  let gameType = '';
  switch (props.gameType) {
    case 'practice_plain_multiplication':
      gameType = 'x';
      break;
    case 'practice_plain_division':
      gameType = '÷';
      break;
    case 'practice_mixed_multiplication_division':
      gameType = 'mix';
      break;
    case 'practice_mixed_all':
      gameType = ' mix';
      break;
    default:
      gameType = 'N/A';
  }
  const resultDate = moment(props.createdAt).format('DDMMM');
  const resultSummaryStr = `${props.playerName}: ${resultDate} ${props.gameTable}${gameType} ${props.gameQuestionTime}s/Q ${props.percentageCorrect}%`;
  const gameAnswersStr = props.gameAnswers.sort((a, b) => {
    return a.questionId - b.questionId;
  }).reduce((answerStr, answer, i, a) => {
    answerStr += `${answer.questionId}) ${answer.questionOperand1}${answer.questionOperator}${answer.questionOperand2}=${answer.answerGiven}`;
    answerStr += answer.answeredCorrectly ? '' : `(${answer.correctAnswer})`;
    answerStr += '\n';
    return answerStr;
  },'');
  console.log('gameAnswersStr:',gameAnswersStr)
  Meteor.call(
    'sendResultsToParents',
    props.parentEmail,
    'admin@mathcombat.co.za',
    resultSummaryStr,
    gameAnswersStr,
  );
}

const GameOverComp = (props) => {
  writeGameToDB(props);
  emailResultToParent(props);
  let feedbackMessage = '';
  if (props.percentageCorrect < 90) {
    feedbackMessage = 'Oh no!, a kitten just died! :(';
  } else {
    feedbackMessage = 'Awesome!!!!';
  }
  return (
    <section id="game-over-area">
      <h2>GAME OVER!</h2>
      <h1> Percentage: {props.percentageCorrect}% </h1>
      <h3>{feedbackMessage}</h3>
    </section>
  );
};

GameOverComp.propTypes = {
  percentageCorrect: PropTypes.number.isRequired,
};

export default GameOverComp;
