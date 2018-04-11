import React from 'react';
import PropTypes from 'prop-types';
import './QuestionsResultsComp.less';


const QuestionsResultsComp = (props) => {
  // Sort the array by decending questionId.
  props.gameAnswers.sort((a, b) => b.questionId - a.questionId);

  return (
    <section id="questions-results-area">
      <div className="wrapper">
        <ul className="question-results-list">
          {props.gameAnswers.map((value) => {
            const liBackgroundColor = value.answeredCorrectly ? 'greenyellow' : '#dd3545';
            const liStyle = {
              backgroundColor: liBackgroundColor,
              fontSize: 'small',
              margin: '0px 0px 1px 0px',
              borderColor: 'black',
              borderWidth: '1px',
              borderStyle: 'solid',
              paddingLeft: '5px',
            };
            const questionString = `${value.questionOperand1}${value.questionOperator}${value.questionOperand2}=${value.answerGiven}`;
            return (
              <li key={value.questionId} style={liStyle}>
                <span className="question-id-string">{`${value.questionId})`}</span>
                <div className="question-string">{questionString}</div>
                {value.answeredCorrectly ?
                  null :
                  <div className="correct-answer-string">{`(${value.correctAnswer})`}</div>
                 }
              </li>
            );
            })
          }
        </ul>
      </div>
    </section>
  );
};

QuestionsResultsComp.propTypes = {
  gameAnswers: PropTypes.arrayOf.isRequired,
};

export default QuestionsResultsComp;
