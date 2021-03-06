import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import SchoolCreateForm from '../../forms/schools/SchoolCreateForm';

export default class SchoolCreateComp extends Component {
  constructor(props) {
    super(props);
    this.state = { feedbackMsg: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.cancelButtonHandler = this.cancelButtonHandler.bind(this);
  }

  onSubmit(data) {
    this.setState({ feedbackMsg: 'Creating..' });
    Meteor.call('school.create', data, (err) => {
      if (err) {
        console.log('There was an error: ', err.reason, err.details);
        this.setState({ feedbackMsg: `There was an error: ${err.reason} (${err.details.why})` });
      } else {
        console.log('School Created');
        this.setState({ feedbackMsg: 'School Created' });
        this.props.history.push('/admin/school_list');
      }
    });
  }

  cancelButtonHandler() {
    this.props.history.push('/admin/school_list');
  }

  render() {
    return (
      <div>
        {this.state.feedbackMsg ? <h4>{this.state.feedbackMsg}</h4> : ''}
        <button onClick={() => this.cancelButtonHandler()}>
          Cancel
        </button>
        <SchoolCreateForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
