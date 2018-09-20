// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Reducers
import appReducer from './reducers/appReducer';

// Middlewares
import loadData from './middlewares/loadData';
import saveData from './middlewares/saveData';

// Components
import AppContainer from './containers/AppContainer';

const initialState = {
  videosList: {},
  favouritesVideosList: [],
  resultsPerPage: 9,
  slicePageFrom: 0,
  slicePageTo: 9,
};

const store = createStore(appReducer, initialState, applyMiddleware(saveData, loadData));

const AppToRender = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

const domNode = document.getElementById('app');

if (domNode !== null) {
  ReactDOM.render(<AppToRender />, domNode);
}
