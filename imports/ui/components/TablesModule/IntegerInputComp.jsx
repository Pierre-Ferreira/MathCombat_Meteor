import React from 'react';
import PropTypes from 'prop-types';
import './IntegerInputComp.css';

class IntegerInputComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      inputValue: '',
      feedBackMsg: '',
      questionId: '1',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.questionId && nextProps.questionId !== this.state.questionId) {
      this.setState({
        inputValue: '',
        questionId: nextProps.questionId,
      });
    }
  }

  handleOnChange(e) {
    // Reset the feedback message.
    this.setState({ feedBackMsg: '' });
    // Trim the input value.
    let newText = (e.target.value).trim();
    // let newInteger = this.state.inputValue;
    let negativeInt = false;
    // Check if the value is negative.
    if (newText[0] === '-') {
      negativeInt = true;
      newText = newText.slice(1);
      if (newText.length === 0) {
        this.setState({ inputValue: '-' });
      }
    }
    // Check if the text is a number.
    if (!isNaN(newText)) {
      newText = (newText === '') ? '' : Math.trunc(newText);
      // Replace the minus sign if needed.
      if (negativeInt) {
        newText = `-${newText}`;
      }
      // Check if value is bigger than min value.
      const minValue = (this.props.minValue) ? this.props.minValue : Number.NEGATIVE_INFINITY;
      if (newText < minValue && newText.length !== 0) {
        this.setState({ feedBackMsg: `Number must be '${minValue}' or bigger!` });
      }
      // Check if value is smaller than max value.
      const maxValue = (this.props.maxValue) ? this.props.maxValue : Number.POSITIVE_INFINITY;
      if (newText > maxValue && newText.length !== 0) {
        this.setState({ feedBackMsg: `Number must be '${maxValue}' or smaller!` });
      }
      // Set the state with the new value.
      this.setState({ inputValue: newText });
      // Update the REDUX store with the current value (answer).
      this.props.parentOnChangeFunc(newText);
    } else {
      this.setState({ feedBackMsg: 'Numbers only, Doofus!' });
    }
  }

  render() {
    return (
      <div id="interger-input-main">
        <div>
          <div>
            <input
              id="inputlg"
              className="integer-input"
              name={this.props.name}
              type="text"
              value={this.state.inputValue}
              onChange={this.handleOnChange}
              autoComplete="off"
              autoFocus
            />
          </div>
          <div style={this.props.feedbackStyle}>
            {this.state.feedBackMsg}
          </div>
        </div>
      </div>
    );
  }
}

IntegerInputComp.propTypes = {
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  feedbackStyle: PropTypes.shape.isRequired,
  questionId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  parentOnChangeFunc: PropTypes.func.isRequired,
};

export default IntegerInputComp;
