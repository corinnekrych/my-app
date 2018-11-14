import React, { Component } from 'react';
import User from '../views/user.view'
import * as api from '../../api/user.api'

class UserContainer extends Component {
  state = {
    fetched: false
  };
  componentDidMount() {
    api.getUser(this.props.match.params.userID).then(user => this.setState({ user: user, fetched: true }));
  }
  render() {
    if (!this.state.fetched) {
      return (<div className='spinner'></div>);
    }
    return (
      <div>
        <User user={this.state.user} />
      </div>
    );
  }
}

export default UserContainer;
