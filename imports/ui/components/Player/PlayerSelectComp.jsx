import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from "moment/moment";
import './PlayerSelectComp.css';

export default class PlayerSelectComp extends Component {
  constructor(props) {
    super(props);
    this.state = { feedbackMsg: '' };
    this.selectButtonHandler = this.selectButtonHandler.bind(this);
    this.editButtonHandler = this.editButtonHandler.bind(this);
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

  editButtonHandler() {
    this.props.history.push('/main/player_list');
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
              <h1 className="text-center">Select Kid</h1>
            </div>
            {/* <div className="flex-container"> */}
            {this.state.feedbackMsg ? <h2>{this.state.feedbackMsg}</h2> : ''}
            {
              players.map(player => {
                return (
                  <div key={player._id} className="userPost">
                    <Button className="kids-select-btn" size="lg" block onClick={() => this.selectButtonHandler(player._id, player.name)}>
                      <div>{player.name} Gr{player.grade}</div>
                    </Button>
                  </div>
                );
              }).sort((a, b) => a.createdAt > b.createdAt)
            }
            <Button color="success" size="lg" block onClick={() => this.editButtonHandler()}>
              Edit Kids
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
