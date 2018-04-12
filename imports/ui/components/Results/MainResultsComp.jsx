import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import PracticeResultsContainer from '../../containers/Results/PracticeResultsContainer';
import './MainResultsComp.less';

export default class MainResultsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // feedbackMessage: '',
      // feedbackMessageType: '',
    };
  }

  render() {
    // const { feedbackMessage, feedbackMessageType } = this.state;
    return (
      <div id="main-results-comp">
        <div className="heading">Results</div>
        <div className="main-results-screen">
          <PracticeResultsContainer />
        </div>
      </div>
    );
  }
}

MainResultsComp.propTypes = {
  // history: PropTypes.shape.isRequired,
  // push: PropTypes.func.isRequired,
};
