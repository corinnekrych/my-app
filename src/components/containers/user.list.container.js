import React, { Component } from 'react';
import * as api from '../../api/user.api'
import UserList from '../views/user.list.view';

class UserListContainer extends Component {
  state = {
    fetched: false,
    users: []
  };
  componentDidMount() {
    api.getUsers().then(users => this.setState({ users: users, fetched: true }));
  }
  render() {
    if (!this.state.fetched) {
      return (<div className='spinner'></div>);
    }
    return (<UserList users={this.state.users} />);
  }
}

export default UserListContainer;
