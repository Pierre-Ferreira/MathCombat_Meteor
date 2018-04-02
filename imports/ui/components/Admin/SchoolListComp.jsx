import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';
// import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import Schools from '../../../api/schools/collection'
import moment from "moment/moment";

class PostList extends Component {

  render() {

    const removeButtonHandler = (_id) => {
      Meteor.call('school.remove', _id);
    };

    const { loading, schools } = this.props;

    if (loading) {
      return <div>Waiting for the method</div>
    }

    return (
      <div className="flex-container">
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
                      {/* <a href={route.path('school_edit', {_id: school._id})}>Edit</a> */}
                      <Link to={`/admin/school_edit/${school._id}`}>Edit</Link>
                      <br/>
                      <button onClick={() => {
                        removeButtonHandler(school._id);
                      }}>Remove
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

export default withTracker(props => {
  const handle = Meteor.subscribe('schools');

  return {
    loading: !handle.ready(),
    schools: Schools.find({}, {
      sort: { createdAt: -1 },
    }).fetch(),
  }
})(PostList);
