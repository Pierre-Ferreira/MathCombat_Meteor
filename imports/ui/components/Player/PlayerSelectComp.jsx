import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
// import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from "moment/moment";

export default class PlayerListComp extends Component {
  constructor(props) {
    super(props);
    this.state = { feedbackMsg: '' };
    this.addButtonHandler = this.addButtonHandler.bind(this);
    this.editButtonHandler = this.editButtonHandler.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
  }

  addButtonHandler() {
    this.props.history.push('/main/player_create');
  }

  selectButtonHandler(_id, playerName) {
    Meteor.call('player.get', _id, (err, result) => {
      if (err) {
        console.log('err:', err);
        this.setState({ feedbackMsg: `Player '${playerName}' not selected!` });
      } else {
        this.props.setPlayerInfo(result);
        this.props.history.push('/main/welcome');
      }
    })
  }

  editButtonHandler(_id) {
    this.props.history.push(`/main/player_edit/${_id}`);
  }

  removeButtonHandler(_id, playerName) {
    if (confirm(`Are you sure you want to delete player '${playerName}'?`)) {
      Meteor.call('player.remove', _id, (err) => {
        if (err) {
          console.log('err:', err);
          this.setState({ feedbackMsg: `Player '${playerName}' not deleted!` });
        } else {
          this.setState({ feedbackMsg: `Player '${playerName}' deleted!` });
        }
      });
    }
  }

  render() {
    const { loading, players } = this.props;
    if (loading) {
      return <div>Waiting for the method</div>;
    }
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Kids</h1>
            </div>
            {/* <div className="flex-container"> */}
            {this.state.feedbackMsg ? <h2>{this.state.feedbackMsg}</h2> : ''}
            <button onClick={() => this.addButtonHandler()}>
              Add New
            </button>
            {
              players.map(player => {
                return (
                  <div key={player._id} className="userPost">
                    <div>{player.name}</div>
                    <div>{player.address}</div>
                    <div>{moment(player.createdAt).format('H:m:s MM.DD')}</div>
                    {
                      player.userId === Meteor.userId() ?
                        <div>
                          <br/>
                          <button onClick={() => this.selectButtonHandler(player._id, player.name)}>
                            Select
                          </button>
                          <button onClick={() => this.editButtonHandler(player._id)}>
                            Edit
                          </button>
                          <br/>
                          <button onClick={() => this.removeButtonHandler(player._id, player.name)}>
                            Remove
                          </button>
                          <br/>
                        </div> : null
                    }
                  </div>
                );
              }).sort((a, b) => a.createdAt > b.createdAt)
            }
          </div>
        </div>
      </div>
    )
  }
}
