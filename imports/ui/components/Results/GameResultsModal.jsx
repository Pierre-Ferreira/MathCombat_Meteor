import React from 'react';
import classNames from 'classnames';
import moment from 'moment-timezone';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './GameResultsModal.less';

class GameResultsModal extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   modal: false
    // };
  }

  render() {
    const modalClass = classNames({
      modal: true,
      show: this.props.isOpen,
      fade: true,
    });
    const {
      createdAt,
      resultCnt,
      gameType,
      gameQuestionTime,
      gameTable,
      percentageCorrect,
      gameAnswers,
    } = this.props;
    const resultDate = moment.tz(createdAt, 'Africa/Johannesburg').format("DDMMM[']YY hh:mma");
    const gameInfoStr = `${resultCnt}. ${gameTable}${gameType} ${gameQuestionTime}s/Q ${percentageCorrect}%`;
    return (
      <div id="game-results-modal">
        <div className={modalClass} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <Button color="danger" className="pull-right" onClick={() => this.props.closeModal()}>BACK</Button>
              <div className="modal-header">
                <h1 className="text-center">Game Result</h1>
              </div>
              <div className="modal-body">
                <div className="game-info-string">{gameInfoStr}</div>
                <div className="game-date-string">{resultDate}</div>
                <hr />
                <div className="game-answers">
                  {gameAnswers ?
                    gameAnswers.sort((a, b) => {
                      return a.questionId - b.questionId;
                    }).map((answer) => {
                      let answerStr = `${answer.questionId}) ${answer.questionOperand1}${answer.questionOperator}${answer.questionOperand2}=${answer.answerGiven}`;
                      answerStr += answer.answeredCorrectly ? '' : `(${answer.correctAnswer})`;
                    return (
                      <div className={answer.answeredCorrectly ? 'correct-answer' : 'incorrect-answer'}>
                        {answerStr}
                      </div>
                    );
                  }) :
                  ''
                  }
                </div>
              </div>
              <div className="modal-footer" style={{ borderTop: 0 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameResultsModal;
