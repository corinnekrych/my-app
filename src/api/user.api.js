function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJson(response) {
  return response.json();
}

function sortByNameDescending(slice) {
  if (!slice instanceof Array) {
    return slice
  }
  return slice.sort(function sortName(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    return nameA === nameB ? 0 : nameA < nameB ? 1 : -1;
  })
}

function httpUsersCall() {
  return fetch('http://jsonplaceholder.typicode.com/users', {
    method: 'get',
    headers: {
      accept: 'application/json'
    }
  });
}

export function getUser(userId) {
  return getUsers().then(function (users) {
    return users.find(e => e.id.toString() === userId);
  })
}

export function getUsers() {
  return httpUsersCall()
    .then(checkStatus)
    .then(parseJson)
    .then(sortByNameDescending);
}
