import {checkStatus, parseJson} from './user.api';

function httpCommentsCall(userId) {
  return fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    method: 'get',
    headers: {
      accept: 'application/json'
    }
  });
}

export default function getComments(userId) {
  return httpCommentsCall(userId)
    .then(checkStatus)
    .then(parseJson);
}
