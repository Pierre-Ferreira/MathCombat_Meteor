import React from 'react';
import PropTypes from 'prop-types';
import './WelcomeComp.less';

const WelcomeComp = (props) => {
  return (
    <div className="WelcomeComp-layout">
      <h1 className="text-center">
        Welcome {props.playerName} {props.playerSurname}
      </h1>
    </div>
  );
};

WelcomeComp.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerSurname: PropTypes.string.isRequired,
};

export default WelcomeComp;
