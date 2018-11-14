import { shallow } from 'enzyme';
import React, { Component } from 'react';
import User from './user.view';

describe('<User />', () => {
  const user = {
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
    "id": 44,
    "name": "hh",
    "phone": "222",
    "username": "ii",
    "website": "jj"
  };

  it("should render user's name", () => {
    const wrapper = shallow(<User user={user} />);
    expect(wrapper.find('.form-group').length).toEqual(12);
    expect(wrapper.find('.col-sm-10').at(0).childAt(0).contains(user.name)).toBeTruthy();
    expect(wrapper.find('.col-sm-10').at(1).childAt(0).contains(user.username)).toBeTruthy();
    expect(wrapper.find('.col-sm-10').at(2).childAt(0).contains(user.email)).toBeTruthy();
  });

});
