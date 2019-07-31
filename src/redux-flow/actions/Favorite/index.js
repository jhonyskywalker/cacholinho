import uuidv1 from 'uuid/v1';
import _ from 'lodash';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../../constants/Favorite';

const addFavorite = (params, dispatch, getState) => {
  dispatch({
    type: ADD_FAVORITE,
    payload: [
      ...getState().favorite.payload,
      {
        ...params,
        uuid: uuidv1(),
        date: new Date(),
      },
    ],
  });
};

const removeFavorite = (params, dispatch, getState) => {
  const items = getState().favorite.payload;

  _.remove(items, item => item.uuid === params.uuid);

  dispatch({
    type: REMOVE_FAVORITE,
    payload: items,
  });
};

export const actionAddFavorite = params => (dispatch, getState) => addFavorite(params, dispatch, getState);

export const actionRemoveFavorite = params => (dispatch, getState) => removeFavorite(params, dispatch, getState);
