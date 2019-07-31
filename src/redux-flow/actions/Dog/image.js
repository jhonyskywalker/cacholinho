import {
  FETCH_DOG_IMAGE_FAILURE,
  FETCH_DOG_IMAGE_REQUEST,
  FETCH_DOG_IMAGE_SUCCESS,
} from '../../constants/Dog/image';

import Dog from '../../../config/api/dog';

const fetchDogImageRequest = () => ({
  type: FETCH_DOG_IMAGE_REQUEST,
});

const fetchDogImageSuccess = payload => ({
  type: FETCH_DOG_IMAGE_SUCCESS,
  payload,
});

const fetchDogImageFailure = payload => ({
  type: FETCH_DOG_IMAGE_FAILURE,
  payload,
});

const fetchDogImage = (params, dispatch) => {
  dispatch(fetchDogImageRequest());

  Dog.image({
    breed: params.breed,
  }).then((response) => {
    dispatch(fetchDogImageSuccess(response.data.message));
  }).catch(() => {
    dispatch(fetchDogImageFailure());
  });
};

export const actionFetchDogImage = params => dispatch => fetchDogImage(params, dispatch);
