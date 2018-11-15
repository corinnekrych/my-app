import React, { Component } from 'react';
import User from './user'
import getUser from '../api/user.api'
import {Route} from 'react-router-dom';
import CommentsContainer from './comments.container';

class UserContainer extends Component {
  state = {
    fetched: false
  };
  componentDidMount() {
    console.log(`PROPS is ${JSON.stringify(this.props)}`);
    getUser(this.props.match.params.userID).then(user => this.setState({ user: user, fetched: true }));
  }
  render() {
    if (!this.state.fetched) {
      return (<div className='spinner'></div>);
    }
    return (
      <div>
        {this.props.match.isExact ? (
          <User user={this.state.user} />
        ) : (
          <Route path={`${this.props.match.path}/comment`} component={CommentsContainer} />
        )}
      </div>
    );
  }
}

export default UserContainer;
