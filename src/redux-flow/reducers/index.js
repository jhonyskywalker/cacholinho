import {
  combineReducers,
} from 'redux';

import {
  connectRouter,
} from 'connected-react-router';

import dog from './Dog';
import favorite from './Favorite';

export default history => combineReducers({
  favorite,
  dog,
  router: connectRouter(history),
});
