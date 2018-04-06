import React from 'react';
import PropTypes from 'prop-types';
import './QuestionsResultsComp.css';


const QuestionsResultsComp = (props) => {
  // Sort the array by decending questionId.
  props.gameAnswers.sort((a, b) => b.questionId - a.questionId);

  return (
    <section id="questions-results-area">
      <ul className="question-results-list">
        {props.gameAnswers.map((value) => {
          const liBackgroundColor = value.answeredCorrectly ? 'greenyellow' : 'red';
          const liStyle = {
            backgroundColor: liBackgroundColor,
            margin: '0px 0px 1px 0px',
            borderColor: 'black',
            borderWidth: '1px',
            borderStyle: 'solid',
            paddingLeft: '5px',
          };
          const questionString = `${value.questionId}) ${value.questionOperand1}
                        ${value.questionOperator}
                        ${value.questionOperand2} = ${value.answerGiven} (${value.correctAnswer})`;
          return (
            <li key={value.questionId} style={liStyle}>
              {questionString}
            </li>
          );
          })
        }
      </ul>
    </section>
  );
};

QuestionsResultsComp.propTypes = {
  gameAnswers: PropTypes.arrayOf.isRequired,
};

export default QuestionsResultsComp;
