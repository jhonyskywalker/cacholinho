import { FORM_CHANGE } from '../../constants/Form';

const initialState = {
  payload: {
    breed: '',
    name: '',
    color: '',
    font: '',
    image: '',
    position: null,
    message: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_CHANGE:
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
};
