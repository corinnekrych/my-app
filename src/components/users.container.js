import React, { Component } from 'react';
import {fetchUsers} from '../actions/user.actions';
import UserList from './users';
import { connect } from 'react-redux';

class UsersContainer extends Component {
  // state = {
  //   fetched: false,
  //   users: []
  // };

  componentDidMount() {
    // console.log(`PROPS is ${JSON.stringify(this.props)}`);
    // api.getUsers().then(users => this.setState({ users: users, fetched: true }));
    this.props.dispatch(fetchUsers);
  }
  render() {
    if (!this.props.fetched) {
      return (<div className='spinner'></div>);
    }
    // return (<div>
    //   <UserList users={this.state.users} />
    // </div>);
    return (<UserList users={this.props.users} />);
  }
}
const mapStateToProps = function(store) {
  return {
    users: store.users,
    fetched: store.fetched
  };
};

export default connect(mapStateToProps)(UsersContainer);
//export default UsersContainer;
