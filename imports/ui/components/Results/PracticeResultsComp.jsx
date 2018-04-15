import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GameResultsModal from './GameResultsModal';
import './PracticeResultsComp.less';

export default class PracticeResultsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(modalProps) {
    this.setState({
      isOpen: true,
      resultCnt: modalProps.resultCnt,
      gameType: modalProps.gameType,
      createdAt: modalProps.createdAt,
      gameQuestionTime: modalProps.gameQuestionTime,
      gameTable: modalProps.gameTable,
      percentageCorrect: modalProps.percentageCorrect,
      gameAnswers: modalProps.gameAnswers,
    });
  }

  closeModal() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { PracticeResultsCursor } = this.props; // This needs to include all practice game types not just multiplication.
    return (
      <div id="practice-results-comp">
        <ul>
          {PracticeResultsCursor.map((result, i, arr) => {
            const resultCnt = arr.length - i;
            let gameType = '';
            switch (result.gameType) {
              case 'practice_plain_multiplication':
                gameType = 'x';
                break;
              case 'practice_plain_division':
                gameType = '÷';
                break;
              case 'practice_mixed_multiplication_division':
                gameType = 'mix';
                break;
              case 'practice_mixed_all':
                gameType = ' mix';
              break;
              default:
                gameType = 'N/A';
            }
            const resultDate = moment(result.createdAt).format('DDMMM');
            const resultStr = `${resultCnt}. ${resultDate} ${result.gameTable}${gameType} ${result.gameQuestionTime}s/Q ${result.percentageCorrect}%`;
            const modalProps = {
              resultCnt,
              gameType,
              createdAt: result.createdAt,
              gameQuestionTime: result.gameQuestionTime,
              gameTable: result.gameTable,
              percentageCorrect: result.percentageCorrect,
              gameAnswers: result.gameAnswers,
            }
            return (
              <li key={resultCnt}>
                <div
                  role="button"
                  // tabIndex={0}
                  className="result-string"
                  onClick={() => this.openModal(modalProps)}
                  // onKeyPress={this.toggleModal}
                >
                  {resultStr}
                </div>
              </li>
            );
          })}
        </ul>
        <GameResultsModal
          isOpen={this.state.isOpen}
          closeModal={this.closeModal}
          resultCnt={this.state.resultCnt}
          gameType={this.state.gameType}
          createdAt={this.state.createdAt}
          gameQuestionTime={this.state.gameQuestionTime}
          gameTable={this.state.gameTable}
          percentageCorrect={this.state.percentageCorrect}
          gameAnswers={this.state.gameAnswers}
        />
      </div>
    );
  }
}

PracticeResultsComp.propTypes = {
  PracticeResultsCursor: PropTypes.arrayOf.isRequired,
  // push: PropTypes.func.isRequired,
};
