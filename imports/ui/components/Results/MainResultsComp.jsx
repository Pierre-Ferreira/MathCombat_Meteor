import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import PracticeTablesResultsContainer from '../../containers/Results/TablesResults/PracticeTablesResultsContainer';
import PracticeSumsResultsContainer from '../../containers/Results/SumsResults/PracticeSumsResultsContainer';
import './MainResultsComp.less';

export default class MainResultsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsSelectValue: 'tables_practice_results',
      // feedbackMessageType: '',
    };
    this.resultSelectChange = this.resultSelectChange.bind(this);
  }

  resultSelectChange(e) {
    console.log('e:', e.target.value)
    this.setState({
      resultsSelectValue: e.target.value,
    });
  }

  render() {
    let resultsDisplay = '';
    switch (this.state.resultsSelectValue) {
      case 'tables_practice_results':
        resultsDisplay = <PracticeTablesResultsContainer />;
        break;
      case 'sums_practice_results':
        resultsDisplay = <PracticeSumsResultsContainer />;
        break;
      default:
        resultsDisplay = 'Loading...';
    }
    // const { feedbackMessage, feedbackMessageType } = this.state;
    return (
      <div id="main-results-comp">
        <div className="heading">Results</div>
        <Form>
          <FormGroup>
            <Input
              type="select"
              name="select"
              className="main-results-select"
              onChange={this.resultSelectChange}
              value={this.state.resultsSelectValue}
            >
              <option value="tables_practice_results">Tables Practice Results</option>
              <option value="sums_practice_results">Sums Practice Results</option>
            </Input>
          </FormGroup>
        </Form>
        <div className="main-results-screen">
          {resultsDisplay}
        </div>
      </div>
    );
  }
}

MainResultsComp.propTypes = {
  // history: PropTypes.shape.isRequired,
  // push: PropTypes.func.isRequired,
};
