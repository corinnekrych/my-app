import React, { Component } from 'react';
import * as api from '../api/user.api'
import UserList from './users';


class UsersContainer extends Component {
  state = {
    fetched: false,
    users: []
  };
  componentDidMount() {
    console.log(`PROPS is ${JSON.stringify(this.props)}`);
    api.getUsers().then(users => this.setState({ users: users, fetched: true }));
  }
  render() {
    if (!this.state.fetched) {
      return (<div className='spinner'></div>);
    }
    return (<div>
      <UserList users={this.state.users} />
    </div>);
  }
}

export default UsersContainer;
