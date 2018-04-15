import React from 'react';
import PropTypes from 'prop-types';
import QuestionsResultsContainer from '../../containers/SumsModule/QuestionsResultsContainer';
import GameScoreContainer from '../../containers/SumsModule/GameScoreContainer';

const gameTypeHeaderStyle = {
  textAlign: '-webkit-center',
  fontSize: 'larger',
};

// const GameFeedbackComp = (props) => {
const GameFeedbackComp = (props) => {
  let gameTypeDesc = '';
  if (props.gameType === 'practice_plain_addition') {
    gameTypeDesc = 'Optel';
  } else if (props.gameType === 'practice_plain_subtraction') {
    gameTypeDesc = 'Aftrek';
  } else if (props.gameType === 'practice_mixed_addition_subtraction') {
    gameTypeDesc = 'Optel en Aftrek gemeng';
  } else {
    gameTypeDesc = '';
  }
  return (
    <section id="game-feedback-area">
      <div style={gameTypeHeaderStyle}>{gameTypeDesc}</div>
      <GameScoreContainer />
      <br />
      <QuestionsResultsContainer gameAnswers={props.gameAnswers} />
    </section>
  );
};

GameFeedbackComp.propTypes = {
  gameType: PropTypes.string.isRequired,
  gameAnswers: PropTypes.arrayOf.isRequired,
};

export default GameFeedbackComp;
