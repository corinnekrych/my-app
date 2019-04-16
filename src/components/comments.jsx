import React, { Component } from 'react';
import '../../node_modules/patternfly/dist/css/patternfly.css';
import '../../node_modules/patternfly/dist/css/patternfly-additions.css'

class CommentList extends Component {
  render() {
    const user = this.props.user;
    const commentComponent = this.props.comments.map((comment) => (
      <div className="list-group-item" key={comment.id}>
        <div className="list-group-item-header">
          <div className="list-view-pf-main-info">
            <div className="list-view-pf-left">
              <span className="fa fa-user list-view-pf-icon-sm"></span>
            </div>
            <div className="list-view-pf-body">
              <div className="list-view-pf-description">
                <div className="list-group-item-heading">
                    {comment.title}
                </div>
              </div>
              <div className="list-view-pf-additional-info">
                <div className="list-view-pf-additional-info-item">
                  {comment.body},
                </div>
                <div className="list-view-pf-additional-info-item">
                  {user.name}
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
              <h1>List of comments for {user.name}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="list-group list-view-pf list-view-pf-view">
              {commentComponent}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default CommentList;
