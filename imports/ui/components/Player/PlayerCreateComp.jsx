import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PlayerCreateForm from '../../forms/players/PlayerCreateForm';
import FormFeedbackMessageComp from '../Misc/FormFeedbackMessageComp';

export default class PlayerCreateComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackMessage: '',
      feedbackMessageType: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.cancelButtonHandler = this.cancelButtonHandler.bind(this);
  }

  onSubmit(data) {
    this.setState({ feedbackMessage: 'Creating..' });
    Meteor.call('player.create', data, (err) => {
      if (err) {
        console.log('There was an error: ', err.reason, err.details);
        this.setState({
          feedbackMessage: `There was an error: ${err.reason} (${err.details.why})`,
          feedbackMessageType: 'danger',
        });

      } else {
        console.log('Player Created');
        this.setState({
          feedbackMessage: 'Player Created',
          feedbackMessageType: 'success',
        });
        this.props.history.push('/main/player_select');
      }
    });
  }

  cancelButtonHandler() {
    this.props.history.push('/main/player_select');
  }

  render() {
    const { feedbackMessage, feedbackMessageType } = this.state;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Add kid</h1>
            </div>
            <div className="modal-body">
              <FormFeedbackMessageComp
                feedbackMessageType={feedbackMessageType}
                feedbackMessage={feedbackMessage}
              />
              <button onClick={() => this.cancelButtonHandler()}>
                Cancel
              </button>
              <PlayerCreateForm
                onSubmit={this.onSubmit}
              />
            </div>
            <div className="modal-footer" style={{ borderTop: 0 }} />
          </div>
        </div>
      </div>
    );
  }
}
