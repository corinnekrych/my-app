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


