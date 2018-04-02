import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export default class SchoolDeleteComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleting: 'removing...',
    };
  }

  componentDidMount() {
    Meteor.call('school.remove', this.props.match.params._id, (err, res) => {
      if (err) {
        console.log('There was an error: ', err.reason, err.details);
        this.setState({ deleting: 'Remove error' });
      } else {
        this.setState({ deleting: 'Post successfully removed' });
      }
    });
  }

  render() {
    return (
      this.state.deleting
    );
  }
}
