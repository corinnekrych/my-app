import { shallow } from 'enzyme';
import React, { Component } from 'react';
import CommentList from './comments';

describe('<CommentList />', () => {
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

  it("should render one component with user's name", () => {
    const wrapper = shallow(<CommentList user={user} comments={comments}/>);
    expect(wrapper.find('.list-group-item-header').length).toEqual(2);
  });

});
