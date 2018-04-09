import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Alert  } from 'reactstrap';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from "moment/moment";
import FormFeedbackMessageComp from '../Misc/FormFeedbackMessageComp';
import './PlayerListComp.less';

export default class PlayerListComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackMessage: '',
      feedbackMessageType: '',
    };
    this.backButtonHandler = this.backButtonHandler.bind(this);
    this.addButtonHandler = this.addButtonHandler.bind(this);
    this.editButtonHandler = this.editButtonHandler.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
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

  backButtonHandler() {
    this.props.history.push('/main/player_select');
  }
  addButtonHandler() {
    this.props.history.push('/main/player_create');
  }

  editButtonHandler(_id) {
    this.props.history.push(`/main/player_edit/${_id}`);
  }

  removeButtonHandler(_id, playerName) {
    if (confirm(`Are you sure you want to delete player '${playerName}'?`)) {
      Meteor.call('player.remove', _id, (err) => {
        if (err) {
          console.log('err:', err);
          this.setState({
            feedbackMessage: `Player '${playerName}' not deleted! ${err}`,
            feedbackMessageType: 'danger',
          });
        } else {
          this.setState({
            feedbackMessage: `Player '${playerName}' deleted!`,
            feedbackMessageType: 'success',
          });
        }
      });
    }
  }

  render() {
    const { players } = this.props;
    const { feedbackMessageType, feedbackMessage } = this.state;
    return (
      <div className="player-list-modal modal show">
        <div className="modal-dialog">
          <div className="modal-content container-fluid">
            <div className="row">
              <Button color="danger col-sm-12" size="lg" block onClick={() => this.backButtonHandler()}>
                Back
              </Button>
            </div>
            <div className="modal-header row">
              <h1 className="text-center">Kids</h1>
            </div>
            <div className="modal-body">
              <FormFeedbackMessageComp
                feedbackMessageType={feedbackMessageType}
                feedbackMessage={feedbackMessage}
              />
              {
                players.map(player => {
                  return (
                    <div key={player._id} className="row player-list-entry">
                      <div className="col-sm-12">
                        {
                          player.userId === Meteor.userId() ?
                            <ButtonGroup>
                            <Button className="btn-blue player-edit-btn col-sm-10" onClick={() => this.editButtonHandler(player._id)}>
                              <div>{player.name}</div>
                              <div>{player.surname}</div>
                              <div>Gr{player.grade}</div>
                              <div>{player.school}</div>
                            </Button>
                            <Button color="info" className="player-remove-btn col-sm-2" onClick={() => this.removeButtonHandler(player._id, player.name)}>
                              x
                            </Button>
                            </ButtonGroup> : null
                        }
                      </div>
                    </div>
                  );
                }).sort((a, b) => a.createdAt > b.createdAt)
              }
              <div className="row">
                <Button className="btn-green" size="lg" block onClick={() => this.addButtonHandler()}>
                  Add New
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PlayerListComp.propTypes = {
  players: PropTypes.arrayOf.isRequired,
  loading: PropTypes.bool.isRequired,
};
