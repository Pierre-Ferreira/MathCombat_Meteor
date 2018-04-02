import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
// import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import moment from "moment/moment";

export default class SchoolListComp extends Component {
  constructor(props) {
    super(props);
    this.state = { feedbackMsg: '' };
    this.addButtonHandler = this.addButtonHandler.bind(this);
    this.editButtonHandler = this.editButtonHandler.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
  }

  addButtonHandler() {
    this.props.history.push('/admin/school_create');
  }

  editButtonHandler(_id) {
    this.props.history.push(`/admin/school_edit/${_id}`);
  }

  removeButtonHandler(_id, schoolName) {
    if (confirm(`Are you sure you want to delete school '${schoolName}'?`)) {
      Meteor.call('school.remove', _id);
      this.setState({ feedbackMsg: `School '${schoolName}' deleted!` });
    }
  }

  render() {
    const { loading, schools } = this.props;
    if (loading) {
      return <div>Waiting for the method</div>;
    }
    return (
      <div className="flex-container">
        {this.state.feedbackMsg ? <h2>{this.state.feedbackMsg}</h2> : ''}
        <button onClick={() => this.addButtonHandler()}>
          Add New
        </button>
        {
          schools.map(school => {
            return (
              <div key={school._id} className="userPost">
                <div>{school.name}</div>
                <div>{school.address}</div>
                <div>{moment(school.createdAt).format('H:m:s MM.DD')}</div>
                {
                  school.userId === Meteor.userId() ?
                    <div>
                      <br/>
                      {/* <Link to={`/admin/school_edit/${school._id}`}>Edit</Link> */}
                      <button onClick={() => this.editButtonHandler(school._id)}>
                        Edit
                      </button>
                      <br/>
                      <button onClick={() => this.removeButtonHandler(school._id, school.name)}>
                        Remove
                      </button>
                      <br/>
                    </div> : null
                }
              </div>
            );
          }).sort((a, b) => a.createdAt > b.createdAt)
        }
      </div>
    )
  }
}
