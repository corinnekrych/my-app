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

### Step1: fetching data
- file structure is grouped [type](https://reactjs.org/docs/faq-structure.html#grouping-by-file-type), bc of small amount of features,
- using mock users data from [placeholder](http://jsonplaceholder.typicode.com/), fetch data.
- install fetch, router and css libs:
  * npm i isomorphic-fetch@2.2.1
  * npm i patternfly@3.12.0
  * npm i react-router-dom@4.3.1
