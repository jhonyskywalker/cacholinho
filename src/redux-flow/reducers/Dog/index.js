import {
  combineReducers,
} from 'redux';

import breeds from './breeds';
import image from './image';

export default combineReducers({
  breeds,
  image,
});
