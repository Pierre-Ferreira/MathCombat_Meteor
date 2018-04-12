import React from 'react';
import PropTypes from 'prop-types';
import './WelcomeComp.less';

const WelcomeComp = (props) => {
  return (
    <div id="welcome-comp-layout">
      <h1 className="heading">
        Welcome {props.playerName} {props.playerSurname}
      </h1>
      <div className="heading line">_____________</div>
    </div>
  );
};

WelcomeComp.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerSurname: PropTypes.string.isRequired,
};

export default WelcomeComp;
