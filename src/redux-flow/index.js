import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple';
import thunkMiddleware from 'redux-thunk';

import createRootReducer from 'redux-flow/reducers';

export const history = createBrowserHistory();

export default createStore(
  createRootReducer(history),
  load({ states: ['favorite'] }),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      save({ states: ['favorite'] }),
      thunkMiddleware,
    ),
  ),
);
