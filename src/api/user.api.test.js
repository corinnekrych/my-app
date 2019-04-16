import * as api from './user.api';
import fetchMock from 'fetch-mock';

const users = [{id: "1", name: "barbara"}, {id: "2", name: "adrian"}, {id: "3", name: "zoe"}];
fetchMock.get('*', users);

it('getUsers should return a sorted list of users', () => {
  return api.getUsers()
    .then(users => {
      expect(users[0].name).toEqual("zoe");
      expect(users[1].name).toEqual("barbara");
      expect(users[2].name).toEqual("adrian");
    });
});

it('getUser(id) should return one user', () => {
  return api.getUser("3")
    .then(u => {
      expect(u.name).toEqual("zoe");
    });
});

