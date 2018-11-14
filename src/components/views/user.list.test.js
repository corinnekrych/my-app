import { shallow } from 'enzyme';
import React, { Component } from 'react';
import UserList from './user.list.view';

describe('<UserList />', () => {
  const users = [{
    "address": {
      "city": "Paris",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      },
      "street": "rue de la paix",
      "suite": "202",
      "zipcode": "75000"
    },
    "company": {
      "bs": "GreatCom",
      "catchPhrase": "catch me",
      "name": "fun"
    },
    "email": "great.com",
    "id": 4,
    "name": "hh",
    "phone": "222",
    "username": "ii",
    "website": "jj"
  }, {
    "address": {
      "city": "aa",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      },
      "street": "bb",
      "suite": "cc",
      "zipcode": "11"
    },
    "company": {
      "bs": "dd",
      "catchPhrase": "ee",
      "name": "ff"
    },
    "email": "gg",
    "id": 5,
    "name": "name2",
    "phone": "222",
    "username": "ii",
    "website": "jj"
  }];

  it("should render one component with user's name", () => {
    const wrapper = shallow(<UserList users={users} />);
    expect(wrapper.find('.list-group-item-header').length).toEqual(2);
    expect(wrapper.find('Link').length).toEqual(2);
    expect(wrapper.find('Link').at(0).childAt(0).contains(users[0].name)).toBeTruthy();
    expect(wrapper.find('Link').at(1).childAt(0).contains(users[1].name)).toBeTruthy();
  });

});
