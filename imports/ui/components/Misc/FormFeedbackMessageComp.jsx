import React from 'react';
import { Link } from 'react-router-dom';

const FormFeedbackMessageComp = (props) => {
  const feedbackMessageType = (props.feedbackMessageType) ? `alert-${props.feedbackMessageType}` : 'alert-danger';
  const feedbackMessage = props.feedbackMessage || '';
  const tokenExpiredFlag = props.tokenExpiredFlag || false;
  const resendVerificationEmailFN = props.resendVerificationEmailFN || '';
  const resendVerificationMessages = props.resendVerificationMessages || '';

  // Check if a feedback message was set.
  if (feedbackMessage.trim().length !== 0) {
    return (
      <div className={`alert ${feedbackMessageType} fade in`}>
        {feedbackMessage}
      </div>
    );
  } else {
    return null;
  }
};

export default FormFeedbackMessageComp;
