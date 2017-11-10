import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers';
import saga from './saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(logger),
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(saga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
