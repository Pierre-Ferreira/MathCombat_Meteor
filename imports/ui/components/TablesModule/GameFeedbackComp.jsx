import React from 'react';
import QuestionsResultsContainer from '../../containers/TablesModule/QuestionsResultsContainer';
import GameScoreContainer from '../../containers/TablesModule/GameScoreContainer';

const GameFeedbackComp = (props) => {
  return (
    <section id="game-feedback-area">
      <GameScoreContainer />
      <br />
      <QuestionsResultsContainer />

    </section>
  );
};
export default GameFeedbackComp;
