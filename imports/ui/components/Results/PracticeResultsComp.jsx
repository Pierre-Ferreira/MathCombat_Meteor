import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import moment from 'moment/moment';
import './PracticeResultsComp.less';

export default class PracticeResultsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // feedbackMessage: '',
      // feedbackMessageType: '',
    };
  }

  render() {
    const { PracticePlainMultiplicationCursor } = this.props; // This needs to include all practice game types not just multiplication.
    return (
      <div id="practice-results-comp">
        <ul>
          {PracticePlainMultiplicationCursor.map((result, i, arr) => {
            const resultCnt = arr.length - i;
            // const gameType = result.
            let gameType = '';
            switch (result.gameType) {
              case 'practice_plain_multiplication':
                gameType = 'x';
                break;
              case 'practice_plain_divistion':
                gameType = '÷';
                break;
              case 'practice_mixed_multiplication_division':
                gameType = 'x && ÷';
                break;
              default:
                gameType = 'N/A';
            }
            const resultDate = moment(result.createdAt).format('DD/MM');
            const resultStr = `${resultCnt}. ${resultDate} ${result.gameTable}${gameType} ${result.gameQuestionTime}s/Q ${result.percentageCorrect}%`;
            return (
              <li>
                <div className="result-string">{resultStr}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

PracticeResultsComp.propTypes = {
  PracticePlainMultiplicationCursor: PropTypes.arrayOf.isRequired,
  // push: PropTypes.func.isRequired,
};
