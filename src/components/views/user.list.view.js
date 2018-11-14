import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/patternfly/dist/css/patternfly.css';
import '../../../node_modules/patternfly/dist/css/patternfly-additions.css'

class UserList extends Component {
  render() {
    const userComponents = this.props.users.map((user) => (
      <div className="list-group-item" key={user.id}>
        <div className="list-group-item-header">
          <div className="list-view-pf-main-info">
            <div className="list-view-pf-left">
              <span className="fa fa-user list-view-pf-icon-sm"></span>
            </div>
            <div className="list-view-pf-body">
              <div className="list-view-pf-description">
                <div className="list-group-item-heading">
                  <Link
                    to={`/user/${user.id}`}
                    key={user.id}
                    >
                    {user.name}
                  </Link>
                </div>
              </div>
              <div className="list-view-pf-additional-info">
                <div className="list-view-pf-additional-info-item">
                  {user.username},
                </div>
                <div className="list-view-pf-additional-info-item">
                  {user.email}
                </div>
                <div className="list-view-pf-additional-info-item">
                  <div className="clearfix">
                    <div>{user.address.street}</div>
                    <div>{user.address.city}, {user.address.country} {user.address.zipcode}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>List of users</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="list-group list-view-pf list-view-pf-view">
              {userComponents}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default UserList;
