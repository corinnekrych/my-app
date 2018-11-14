import { shallow } from 'enzyme';
import React, { Component } from 'react';
import UserListContainer from './user.list.container';

describe('<UserListContainer />', () => {
  const user = {
    "address": {
      "city": "South Elvis",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      },
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "zipcode": "53919-4257"
    },
    "company": {
      "bs": "transition cutting-edge web services",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "name": "Robel-Corkery"
    },
    "email": "Julianne.OConner@kory.org",
    "id": 4,
    "name": "Patricia Lebsack",
    "phone": "493-170-9623 x156",
    "username": "Karianne",
    "website": "kale.biz"
  };
  const users = [user];

  it('should render spinner when data not fetched', () => {
    const wrapper = shallow(<UserListContainer />);
    expect(wrapper.debug()).toEqual('<div className="spinner" />');
  });

  it('should render one component with UserList', () => {
    const wrapper = shallow(<UserListContainer />);
    wrapper.setState({fetched:true, users: users});
    expect(wrapper.debug()).toContain('UserList');
  });

});
