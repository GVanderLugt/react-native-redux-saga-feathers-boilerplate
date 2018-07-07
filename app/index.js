import React from 'react';
import Immutable from 'immutable';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import rootSaga from './sagas';

// components
import App from './App';

// middleware
const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({
    stateTransformer: state => state.toJS(),
  }));
}

const enhancer = compose(
  applyMiddleware(
    ...middlewares
  ),
);

// activate newtork debugging with Fetch
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest; // eslint-disable-line

// create store
const store = createStore(reducers, Immutable.Map(), enhancer);

// start sags
sagaMiddleWare.run(rootSaga);

export default () => (
  <Provider store={ store }>
    <App />
  </Provider>
);
