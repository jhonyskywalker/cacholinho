import {
  FETCH_DOG_IMAGE_REQUEST,
  FETCH_DOG_IMAGE_SUCCESS,
  FETCH_DOG_IMAGE_FAILURE,
} from '../../constants/Dog/image';

const initialState = {
  loading: false,
  error: false,
  payload: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_IMAGE_REQUEST:
      return {
        ...state,
        ...action,
        loading: true,
        error: false,
      };
    case FETCH_DOG_IMAGE_SUCCESS:
      return {
        ...state,
        ...action,
        loading: false,
        error: false,
      };
    case FETCH_DOG_IMAGE_FAILURE:
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
