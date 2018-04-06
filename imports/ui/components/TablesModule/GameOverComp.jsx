import React from 'react';
import PropTypes from 'prop-types';
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

const GameOverComp = (props) => {
  writeGameToDB(props);
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
