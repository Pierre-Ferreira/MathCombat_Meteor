import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Button } from 'reactstrap';
import AuthFeedbackMessageComp from './AuthFeedbackMessageComp';
import './SignupComp.css';

export default class SignupComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackMessage: '',
    };
    this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  close() {
    this.props.history.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    const firstName = document.getElementById('signup-firstname').value;
    const lastName = document.getElementById('signup-surname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    this.setState({
      feedbackMessage: 'Busy...',
      feedbackMessageType: 'success',
    });
    const profile = {
      firstName,
      lastName,
    };
    Accounts.createUser({ email, password, profile }, (err) => {
      if (err) {
        this.setState({
          feedbackMessage: err.reason,
          feedbackMessageType: 'danger',
        });
      } else {
        Meteor.call('sendVerificationLink', (error) => {
          if (error) {
            this.setState({
              feedbackMessage: error.reason,
              feedbackMessageType: 'danger',
            });
          } else {
            this.setState({
              feedbackMessage: 'Email sent! Please click the verification link!',
              feedbackMessageType: 'success',
            });
          }
        });
      }
    });
  }

  render() {
    const { feedbackMessage, feedbackMessageType } = this.state;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <Button color="danger" className="pull-right" size="lg" onClick={this.close}>X</Button>
            <div className="modal-header">
              <div>
                <h1 className="text-center">Sign up</h1>
              </div>
              <div>
                <h4 className="text-center">Kids can be added in backoffice.</h4>
              </div>
            </div>
            <div className="modal-body">
              <AuthFeedbackMessageComp
                feedbackMessageType={feedbackMessageType}
                feedbackMessage={feedbackMessage}
              />
              <form
                id="login-form"
                className="form col-md-12 center-block"
                onSubmit={this.handleSubmit}
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="signup-firstname"
                    className="form-control input-lg"
                    placeholder="parent name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="signup-surname"
                    className="form-control input-lg"
                    placeholder="parent surname"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="signup-email"
                    className="form-control input-lg"
                    placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="signup-password"
                    className="form-control input-lg"
                    placeholder="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    id="login-button"
                    className="btn btn-lg btn-primary btn-block"
                    value="Sign Up"
                  />
                </div>
                <div className="form-group">
                  <p className="text-center">
                    Already have an account? Login <Link to="/auth/login">here</Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{ borderTop: 0 }} />
          </div>
        </div>
      </div>
    );
  }
}
