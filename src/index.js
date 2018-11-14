import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import UserListContainer from './components/containers/user.list.container';
import UserContainer from './components/containers/user.container'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={UserListContainer} />
            <Route path="/user/:userID" component={UserContainer} />
        </div>
    </Router>
    ,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
