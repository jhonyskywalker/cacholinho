import {
  combineReducers,
} from 'redux';

import {
  connectRouter,
} from 'connected-react-router';

import dog from './Dog';
import favorite from './Favorite';
import form from './Form';

export default history => combineReducers({
  dog,
  favorite,
  form,
  router: connectRouter(history),
});
