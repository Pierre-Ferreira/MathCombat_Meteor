import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './GameSettingsComp.less';

class GameSettingsComp extends React.Component {
  constructor(props) {
    super(props);
    this.hangleGameSettingsSubmit = this.hangleGameSettingsSubmit.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
    this.handleGameTypeChange = this.handleGameTypeChange.bind(this);
    this.handleQuestionTimeChange = this.handleQuestionTimeChange.bind(this);
    this.state = {
      gameTable: 10,
      gameType: 'pratice_plain_multiplication',
      gameQuestionTime: 6,
    };
  }

  componentWillUnmount() {
    this.props.clearGame();
  }

  handleTableChange(e) {
    this.setState({ gameTable: e.target.value });
  }
  handleGameTypeChange(e) {
    this.setState({ gameType: e.target.value });
  }
  handleQuestionTimeChange(e) {
    this.setState({ gameQuestionTime: e.target.value });
  }
  hangleGameSettingsSubmit(e) {
    e.preventDefault();
    const gameNoOfQuestions = 20;
    const { gameTable, gameType, gameQuestionTime } = this.state;
    this.props.clearGame();
    this.props.saveGameSettings(gameNoOfQuestions, gameTable, gameType, gameQuestionTime);
    this.props.startGame();
  }
  render() {
    return (
      <section id="game-settings-area">
        <form onSubmit={this.hangleGameSettingsSubmit}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 offset-lg-3 offset-md-2">
                <label htmlFor="tables-game-table">
                  Table
                  <select
                    id="tables-game-table"
                    className="selectpicker"
                    onChange={this.handleTableChange}
                    value={this.state.gameTable}
                  >
                    <optgroup label="Mixed">
                      <option value="all">0 - 12</option>
                    </optgroup>
                    <optgroup label="Table">
                      <option>12</option>
                      <option>11</option>
                      <option>10</option>
                      <option>9</option>
                      <option>8</option>
                      <option>7</option>
                      <option>6</option>
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                      <option>0</option>
                    </optgroup>
                  </select>
                </label>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4">
                <label htmlFor="tables-game-type">
                  x or ÷
                  <select
                    className="selectpicker"
                    onChange={this.handleGameTypeChange}
                    value={this.state.gameType}
                  >
                    <optgroup label="Multiply">
                      <option value="pratice_plain_multiplication">x</option>
                    </optgroup>
                    <optgroup label="Division">
                      <option value="pratice_plain_division">÷</option>
                    </optgroup>
                    <optgroup label="Mixed">
                      <option value="practice_mixed_multiplication_division">x && ÷</option>
                    </optgroup>
                  </select>
                </label>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4">
                <label htmlFor="tables-time-per-question">
                  Time/Q
                  <select
                    id="tables-time-per-question"
                    className="selectpicker"
                    onChange={this.handleQuestionTimeChange}
                    value={this.state.gameQuestionTime}
                  >
                    <optgroup label="Yawn..">
                      <option>10</option>
                      <option>9</option>
                      <option>8</option>
                    </optgroup>
                    <optgroup label="Okayish">
                      <option>7</option>
                      <option>6</option>
                      <option>5</option>
                    </optgroup>
                    <optgroup label="Fairly tough">
                      <option>4</option>
                      <option>3</option>
                    </optgroup>
                    <optgroup label="Very tough">
                      <option>2</option>
                    </optgroup>
                    <optgroup label="Superhero!!">
                      <option>1</option>
                    </optgroup>
                  </select>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                <Button
                  type="submit"
                  className="btn btn-blue btn-lg btn-custom"
                  disabled={this.props.gameStartButtonDisabled}
                >
                  {this.props.gameStartButtonText}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

GameSettingsComp.propTypes = {
  gameStartButtonText: PropTypes.string.isRequired,
  gameStartButtonDisabled: PropTypes.bool.isRequired,
  clearGame: PropTypes.func.isRequired,
  saveGameSettings: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default GameSettingsComp;
