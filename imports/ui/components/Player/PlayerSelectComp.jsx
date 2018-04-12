import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import FormFeedbackMessageComp from '../Misc/FormFeedbackMessageComp';
import './PlayerSelectComp.less';

export default class PlayerSelectComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackMessage: '',
      feedbackMessageType: '',
    };
    this.selectButtonHandler = this.selectButtonHandler.bind(this);
    this.editButtonHandler = this.editButtonHandler.bind(this);
  }

  componentDidMount() {
    const { loading } = this.props;
    if (loading) {
      this.setState({
        feedbackMessage: 'Loading...',
        feedbackMessageType: 'warning',
      });
    } else {
      this.setState({
        feedbackMessage: '',
        feedbackMessageType: '',
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.loading !== this.props.loading) {
      const { loading } = this.props;
      if (loading) {
        this.setState({
          feedbackMessage: 'Loading...',
          feedbackMessageType: 'warning',
        });
      } else {
        this.setState({
          feedbackMessage: '',
          feedbackMessageType: '',
        });
      }
    }
  }

  selectButtonHandler(_id, playerName) {
    Meteor.call('player.get', _id, (err, result) => {
      if (!err && !result) {
        this.setState({
          feedbackMessage: `Player '${playerName}' not selected!`,
          feedbackMessageType: 'danger',
        });
      } else if (err) {
        this.setState({
          feedbackMessage: `Error: ${err}!`,
          feedbackMessageType: 'danger',
        });
      } else {
        this.props.setPlayerInfo(result);
        this.props.history.push('/main/welcome');
      }
    });
  }

  editButtonHandler() {
    this.props.history.push('/main/player_list');
  }

  render() {
    const { players } = this.props;
    const { feedbackMessageType, feedbackMessage } = this.state;
    return (
      <div className="modal show player-select-comp-modal">
        <div className="modal-dialog">
          <div className="modal-content container-fluid">
            <div className="modal-header">
              <h1 className="text-center">Select Kid</h1>
            </div>
            <div className="modal-body">
              <FormFeedbackMessageComp
                feedbackMessageType={feedbackMessageType}
                feedbackMessage={feedbackMessage}
              />
              {
                players.map((player) => {
                  return (
                    <div key={player._id} className="player-select-entry col-sm-12">
                      <Button className="btn-blue player-select-btn" size="lg" block onClick={() => this.selectButtonHandler(player._id, player.name)}>
                        <div>{player.name} Gr{player.grade}</div>
                      </Button>
                    </div>
                  );
                }).sort((a, b) => a.createdAt > b.createdAt)
              }
              <Button className="btn-green" size="lg" block onClick={() => this.editButtonHandler()}>
                Edit Kids
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PlayerSelectComp.propTypes = {
  players: PropTypes.arrayOf.isRequired,
  loading: PropTypes.bool.isRequired,
  setPlayerInfo: PropTypes.func.isRequired,
  history: PropTypes.shape.isRequired,
  push: PropTypes.func,
};
