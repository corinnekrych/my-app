import { shallow } from 'enzyme';
import React, { Component } from 'react';
import CommentListContainer from './comments.container';

describe('<CommentListContainer />', () => {
  const comments = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }];
  const user = {name: "corinne"};

  it('should render spinner when data not fetched', () => {
    const routerValue = {params: {userID: 1}};
    const wrapper = shallow(<CommentListContainer match={routerValue}/>);
    expect(wrapper.debug()).toEqual('<div className="spinner" />');
  });

  it('should render one component with CommentList for a given user', () => {
    const routerValue = {params: {userID: 1}};
    const wrapper = shallow(<CommentListContainer user={user} comments={comments} match={routerValue}/>);
    wrapper.setState({fetchedUser:true, user, fetchedComments: true, comments});
    expect(wrapper.debug()).toContain('CommentList');
  });

});
