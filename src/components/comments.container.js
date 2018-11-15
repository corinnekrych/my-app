import React, { Component } from 'react';
import getUser from '../api/user.api'
import getComments from '../api/comment.api'
import CommentList from './comments';

class CommentsContainer extends Component {
  state = {
    fetched: false,
    users: []
  };
  componentDidMount() {
    getUser(this.props.match.params.userID).then(user => this.setState({ user: user, fetchedUser: true }));
    getComments(this.props.match.params.userID).then(comments => this.setState({ comments: comments, fetchedComments: true }));
  }
  render() {
    if (!this.state.fetchedUser || !this.state.fetchedComments ) {
      return (<div className='spinner'></div>);
    }
    return (<CommentList user={this.state.user} comments={this.state.comments} />);
  }
}

export default CommentsContainer;
