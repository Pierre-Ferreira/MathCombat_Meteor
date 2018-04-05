import React from 'react';
import PropTypes from 'prop-types';
import './QuestionCountdownComp.css';

const QuestionCountdownComp = (props) => {
  return (
    <section id="question-countdown-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">Tyd: {props.timerCount}</div>
        </div>
      </div>
    </section>
  );
};

QuestionCountdownComp.propTypes = {
  timerCount: PropTypes.string.isRequired,
};

export default QuestionCountdownComp;
