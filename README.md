# MyApp
Sample react project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Build and Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Step by step
Pick a file structure. Here, file structure is grouped [type](https://reactjs.org/docs/faq-structure.html#grouping-by-file-type), bc of small amount of features

### Step1: fetching data
- using mock users data from [placeholder](http://jsonplaceholder.typicode.com/), fetch data.
- Install
  * npm i isomorphic-fetch@2.2.1
  * npm i fetch-mock@7.2.5 -dev
- create `api.comment.js` + test

### Step2: container vs pure view
- install dep:
  * npm i patternfly@3.12.0
  * npm i react-router-dom@4.3.1
- install dev dependencies:
  * enzyme@3.7.0
  * fetch-mock@7.2.5
1. create View (works only with props) like `comments.jsx` + test
2. create Container (maintain state) like `comments.container.js` + test
3. link container to new api in `componentDidMount` to update the state
4. update routing
Do nested routing of `/user/:userId/comment` inside `user.container.js` like:
```
      <div>
        {this.props.match.isExact ? (
          <User user={this.state.user} />
        ) : (
          <Route path={`${this.props.match.path}/comment`} component={CommentsContainer} />
        )}
      </div>
```
> NOTE: Be aware that that just because we matched another Route component,
that doesn’t mean the previous Routes that matched aren’t still rendered.
This is what confuses a lot of people. Remember, think of Route as rendering another component or null

### Step3: redux
- install dep:
  * redux@4.0.1 contains method `createStore`, `applyMiddleware`
  * react-redux@5.1.1 contains `connect`, your container deal with state (need to subscribe to redux state, dispatch redux actions)
  * redux-thunk@2.3.0 redux-thunk is a middleware that looks at every action that passes through the system, and if it’s a function, it calls that function. it allows to side effects to be ran without making dispatcher impure..
> [NOTE on Redux / Router](https://redux.js.org/advanced/usagewithreactrouter): So you want to do routing with your Redux app.
You can use it with React Router.
Redux will be the source of truth for your data and React Router
will be the source of truth for your URL. In most of the cases, it is fine to have them separate unless you need to time travel and rewind actions that trigger a URL change.

> Redux Router is an experimental library, it lets you keep entirely the state of your URL inside your redux store. It has the same API with React Router API but has a smaller community support than react-router.

- create `action.constants.js` and `user.action.js` (move code from api into action as a function)
- create reducer `user.reducer.js` that take an action constants and return a leave. Reduder deal with action as object. Actions a function are treated as side-effect (redux-thunk) and will evevtuall emit other actions as object to modify the store.
- inject the store at root level in `index.js`:
Replace:
```
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/user" component={UserLayout}/>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
```
By:
```
const middleware = [ thunk ];
const store = createStore(
  userReducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/user" component={UserLayout}/>
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
```
- make the container component subscribe and dispatch instad of modifying the state. Store is now the only source of thruth.
Replace:
```
class UsersContainer extends Component {
  state = {
    fetched: false,
    users: []
  };
  componentDidMount() {
    console.log(`PROPS is ${JSON.stringify(this.props)}`);
    api.getUsers().then(users => this.setState({ users: users, fetched: true }));
  }
  render() {
    if (!this.state.fetched) {
      return (<div className='spinner'></div>);
    }
    return (<div>
      <UserList users={this.state.users} />
    </div>);
  }
}
export default UsersContainer;
```
By:
```
class UsersContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers);
  }
  render() {
    if (!this.props.fetched) {
      return (<div className='spinner'></div>);
    }
    return (<UserList users={this.props.users} />);
  }
}
const mapStateToProps = function(store) {
  return {
    users: store.users,
    fetched: store.fetched
  };
};

export default connect(mapStateToProps)(UsersContainer);
```
Let's play the game of finding 4 diff
- we do not initialize state
- in `componentDidMount`, we dispatch an function action instead of calling ajax http
- in `render` we do not use `this.state` as it's not available anymore, but that all the attribute of state are now passed as props.
- we use HoC `connect` curried with our store info and our ContainComponent => that will generate a compoent with all binding to store without us accessing direclty the store.

> NOTE: I leave unchanged the components.container.js (still working!) altho not a best practice.
