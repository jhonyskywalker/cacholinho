import { FORM_CHANGE } from '../../constants/Form';

const formChange = (params, dispatch, getState) => {
  dispatch({
    type: FORM_CHANGE,
    payload: {
      ...getState().form.payload,
      ...params,
    },
  });
};

export const actionFormChange = params => (dispatch, getState) => formChange(params, dispatch, getState);
