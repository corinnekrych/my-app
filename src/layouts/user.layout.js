import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import UsersContainer from '../components/users.container';
import UserContainer from '../components/user.container';
import CommentsContainer from '../components/comments.container';

class UserLayout extends Component {
  render() {
    return(
      <div>
          <Route exact path="/user" component={UsersContainer} />
          <Route path="/user/:userID" component={UserContainer} />
      </div>
    );
  }
}
export default UserLayout;

