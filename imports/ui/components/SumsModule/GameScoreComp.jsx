import React from 'react';
import PropTypes from 'prop-types';
import './GameScoreComp.css';


const GameScoreComp = (props) => {
  return (
    <section id="game-score-area">
      <div>Korrek: {props.numberOfCorrect} </div>
      <div> Persentasie: {props.percentageCorrect}% </div>
    </section>
  );
};

// TODO: SORT OUT ALL COMPONENTS' PropTypes.
export default GameScoreComp;
