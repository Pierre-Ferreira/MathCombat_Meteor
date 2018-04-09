import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PlayerEditForm from '../../forms/players/PlayerEditForm';
import FormFeedbackMessageComp from '../Misc/FormFeedbackMessageComp';

export default class PlayerEditComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackMessage: '',
      feedbackMessageType: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.cancelButtonHandler = this.cancelButtonHandler.bind(this);
  }

  componentDidMount() {
    // const component = this;
    Meteor.call('player.get', this.props.match.params._id, (err, res) => {
      if (err) {
        console.log('There was an error: ', err.reason, err.details);
        this.setState({
          feedbackMessage: `There was an error: ${err.reason} (${err.details.why})`,
          feedbackMessageType: 'danger',
        });
      } else {
        this.setState(state => state.model = res);
      }
    });
  }

  onSubmit(data) {
    Meteor.call('player.edit', this.props.match.params._id, data, (err) => {
      if (err) {
        console.log('There was an error: ', err.reason, err.details);
        this.setState({
          feedbackMessage: `There was an error: ${err.reason} (${err.details.why})`,
          feedbackMessageType: 'danger',
        });
      } else {
        console.log('Player Updated');
        this.setState({
          feedbackMessage: 'Player Updated',
          feedbackMessageType: 'success',
        });
        this.props.history.push('/main/player_list');
      }
    });
  }

  cancelButtonHandler() {
    this.props.history.push('/main/player_list');
  }

  render() {
    const { feedbackMessage, feedbackMessageType } = this.state;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content container-fluid">
            <div className="row">
              <Button color="danger col-sm-12" size="lg" block onClick={() => this.cancelButtonHandler()}>
                Cancel
              </Button>
            </div>
            <div className="modal-header">
              <h1 className="text-center">Edit kid</h1>
            </div>
            <div className="modal-body">
              <FormFeedbackMessageComp
                feedbackMessageType={feedbackMessageType}
                feedbackMessage={feedbackMessage}
              />
              <PlayerEditForm
                onSubmit={this.onSubmit}
                model={this.state.model}
              />
            </div>
            <div className="modal-footer" style={{ borderTop: 0 }} />
          </div>
        </div>
      </div>
    );
  }
}
