import React from 'react';
import PropTypes from 'prop-types';
import './GameOverComp.css';


const GameOverComp = (props) => {
  let feedbackMessage = '';
  if (props.percentageCorrect < 90) {
    feedbackMessage = 'Aggenee, \'n katjie het dood gegaan! :(';
  } else {
    feedbackMessage = 'BAIE GOED!!!';
  }
  return (
    <section id="game-over-area">
      <h2>GAME OVER!</h2>
      <h1> Persentasie: {props.percentageCorrect}% </h1>
      <h3>{feedbackMessage}</h3>
    </section>
  );
};

GameOverComp.propTypes = {
  percentageCorrect: PropTypes.number.isRequired,
};

export default GameOverComp;
