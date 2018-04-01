import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import SchoolCreateForm from '../../forms/schools/SchoolCreateForm';
// import route from "../../../routing/router";

export default class SchoolCreateComp extends Component {
  constructor(props) {
    super(props);
    this.state = { feedbackMsg: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.setState({ feedbackMsg: 'Creating..' });
    Meteor.call('school.create', data, (err) => {
      if (err) {
        console.log('There was an error: ', err.reason, err.details);
        this.setState({ feedbackMsg: `There was an error: ${err.reason} (${err.details.why})` });
      } else {
        console.log('Post Created');
        this.setState({ feedbackMsg: 'Post Created' });
        // route.go('post_list');
      }
    });
  }

  render() {
    return (
      <div>
        <h4>{this.state.feedbackMsg}</h4>
        <SchoolCreateForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
