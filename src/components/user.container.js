import React, { Component } from 'react';
import User from './user'
import {fetchUsers} from '../actions/user.actions';
import {Route} from 'react-router-dom';
import CommentsContainer from './comments.container';
import { connect } from 'react-redux';

class UserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers);
  }
  render() {
    if (!this.props.fetched) {
      return (<div className='spinner'></div>);
    }
    return (
      <div>
        {this.props.match.isExact ? (
          <User user={this.props.users.find(e => e.id.toString() === this.props.match.params.userID)} />
        ) : (
          <Route path={`${this.props.match.path}/comment`} component={CommentsContainer} />
        )}
      </div>
    );
  }
}
const mapStateToProps = function(store) {
  if (store.fetched) {
    return {
      users: store.users,
      fetched: store.fetched ? store.fetched: false
    };
  }
  return {
    fetched:  false
  };
};

export default connect(mapStateToProps)(UserContainer);
