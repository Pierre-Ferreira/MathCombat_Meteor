import React from 'react';
import { Link } from 'react-router-dom';
import {  Alert  } from 'reactstrap';

const FormFeedbackMessageComp = (props) => {
  const feedbackMessageType = (props.feedbackMessageType) ? props.feedbackMessageType : 'danger';
  const feedbackMessage = props.feedbackMessage || '';

  // Check if a feedback message was set.
  if (feedbackMessage.trim().length !== 0) {
    return (
      <Alert color={feedbackMessageType}>
        <h4>{feedbackMessage}</h4>
      </Alert>
    );
  } else {
    return null;
  }
};

export default FormFeedbackMessageComp;
