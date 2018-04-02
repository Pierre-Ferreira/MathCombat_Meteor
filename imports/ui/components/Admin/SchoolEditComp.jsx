import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import SchoolEditForm from '../../forms/schools/SchoolEditForm';

export default class SchoolEditComp extends Component {
  constructor(props) {
    super(props);
    this.state = { feedbackMsg: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // const component = this;
    console.log('this.props.match.params._id:',this.props.match.params._id)
    Meteor.call('school.get', this.props.match.params._id, (err, res) => {
      if (err) {
        console.log('There was an error: ', err.reason, err.details);
        this.setState({ feedbackMsg: `There was an error: ${err.reason} (${err.details.why})` });
      } else {
        this.setState(state => state.model = res);
      }
    });
  }

  onSubmit(data) {
    Meteor.call('school.edit', this.props.match.params._id, data, (err) => {
      if (err) {
        console.log('There was an error: ', err.reason, err.details);
        this.setState({ feedbackMsg: `There was an error: ${err.reason} (${err.details.why})` });
      } else {
        console.log('School Updated');
        this.setState({ feedbackMsg: 'School Updated' });
        // route.go('school_list');
      }
    });
  }

  render() {
    return (
      <div>
        <h4>{this.state.feedbackMsg}</h4>
        <SchoolEditForm
          onSubmit={this.onSubmit}
          model={this.state.model}
        />
      </div>
    );
  }
}
