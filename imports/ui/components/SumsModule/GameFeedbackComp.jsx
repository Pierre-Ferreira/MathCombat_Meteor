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
  return (
    <section id="game-feedback-area">
      <GameScoreContainer />
      <QuestionsResultsContainer gameAnswers={props.gameAnswers} />
    </section>
  );
};

GameFeedbackComp.propTypes = {
  gameType: PropTypes.string.isRequired,
  gameAnswers: PropTypes.arrayOf.isRequired,
};

export default GameFeedbackComp;
