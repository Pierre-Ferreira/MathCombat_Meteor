import React from 'react';
import PropTypes from 'prop-types';
import IntegerInputComp from './IntegerInputComp';
import './CurrentQuestionComp.css';

class CurrentQuestionComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerOnChange = this.handleAnswerOnChange.bind(this);
  }

  handleAnswerOnChange(currentAnswer) {
    this.props.updateCurrentAnswer(currentAnswer);
  }

  render() {
    const feedbackStyle = {
      fontSize: 'small',
    };

    return (
      <section id="current-question-area">
        <form onSubmit={this.props.onSubmitFn}>
          <div className="container">
            <div className="row">
              <div className="col-sm-1 col-sm-offset-1" />
              <div className="col-sm-2" align="center">{this.props.questionId})</div>
              <div className="col-sm-2" align="center">{this.props.questionOperand1}</div>
              <div className="col-sm-1" align="center">{this.props.questionOperator}</div>
              <div className="col-sm-2" align="center">{this.props.questionOperand2}</div>
              <div className="col-sm-1">=</div>
              <div className="col-sm-2">
                <IntegerInputComp
                  feedbackStyle={feedbackStyle}
                  parentOnChangeFunc={this.handleAnswerOnChange}
                  questionId={this.props.questionId}
                />
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

CurrentQuestionComp.propTypes = {
  questionId: PropTypes.number.isRequired,
  questionOperand1: PropTypes.number.isRequired,
  questionOperand2: PropTypes.number.isRequired,
  questionOperator: PropTypes.string.isRequired,
  onSubmitFn: PropTypes.func.isRequired,
  updateCurrentAnswer: PropTypes.func.isRequired,
};

export default CurrentQuestionComp;
