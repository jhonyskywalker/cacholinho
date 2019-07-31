import { ADD_FAVORITE, REMOVE_FAVORITE } from '../../constants/Favorite';

const initialState = {
  payload: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        ...action,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
};
