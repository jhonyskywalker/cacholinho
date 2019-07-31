import {
  FETCH_DOG_BREEDS_FAILURE,
  FETCH_DOG_BREEDS_REQUEST,
  FETCH_DOG_BREEDS_SUCCESS,
} from '../../constants/Dog/breeds';

import Dog from '../../../config/api/dog';

const fetchDogBreedsRequest = () => ({
  type: FETCH_DOG_BREEDS_REQUEST,
});

const fetchDogBreedsSuccess = payload => ({
  type: FETCH_DOG_BREEDS_SUCCESS,
  payload,
});

const fetchDogBreedsFailure = payload => ({
  type: FETCH_DOG_BREEDS_FAILURE,
  payload,
});

const fetchDogBreeds = (params, dispatch) => {
  dispatch(fetchDogBreedsRequest());

  Dog.breeds().then((response) => {
    const breeds = Object.entries(response.data.message).map(item => ({ value: item[0], label: item[0] }));

    dispatch(fetchDogBreedsSuccess(breeds));
  }).catch(() => {
    dispatch(fetchDogBreedsFailure());
  });
};

export const actionFetchDogBreeds = params => dispatch => fetchDogBreeds(params, dispatch);
