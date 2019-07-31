import {
  FETCH_DOG_BREEDS_REQUEST,
  FETCH_DOG_BREEDS_SUCCESS,
  FETCH_DOG_BREEDS_FAILURE,
} from '../../constants/Dog/breeds';

const initialState = {
  loading: false,
  error: false,
  payload: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_BREEDS_REQUEST:
      return {
        ...state,
        ...action,
        loading: true,
        error: false,
      };
    case FETCH_DOG_BREEDS_SUCCESS:
      return {
        ...state,
        ...action,
        loading: false,
        error: false,
      };
    case FETCH_DOG_BREEDS_FAILURE:
      return {
        ...state,
        ...action,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
