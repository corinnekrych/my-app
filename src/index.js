import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import UsersContainer from './components/users.container';
import UserContainer from './components/user.container'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={UsersContainer} />
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
