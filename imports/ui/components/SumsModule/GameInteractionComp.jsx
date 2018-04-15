import React from 'react';
import PropTypes from 'prop-types';
// import MainQuestionComp from './MainQuestionComp';
import MainQuestionContainer from '../../containers/SumsModule/MainQuestionContainer';
import GameOverContainer from '../../containers/SumsModule/GameOverContainer';
import WelcomeScreenComp from './WelcomeScreenComp';

const GameInteractionComp = (props) => {
  let displayComp = '';
  if (props.displayWelcomeScreen) {
    displayComp = <WelcomeScreenComp />;
  } else {
    displayComp = (props.gameInProgress) ?
      <MainQuestionContainer /> :
      <GameOverContainer />;
  }
  return (
    <section id="game-interaction-area">
      {displayComp}
    </section>
  );
};

GameInteractionComp.propTypes = {
  displayWelcomeScreen: PropTypes.bool.isRequired,
  gameInProgress: PropTypes.bool.isRequired,
};


export default GameInteractionComp;
