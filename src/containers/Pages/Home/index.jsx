import { connect } from 'react-redux';
import { actionAddFavorite, actionRemoveFavorite } from 'redux-flow/actions/Favorite';
import { actionFormChange } from 'redux-flow/actions/Form';
import { actionFetchDogBreeds } from 'redux-flow/actions/Dog/breeds';
import { actionFetchDogImage } from 'redux-flow/actions/Dog/image';

import Home from '../../../components/Pages/Home';

const mapStateToProps = ({
  favorite,
  form,
  dog,
}) => ({
  favorite,
  form,
  dog,
});

const mapDispatchToProps = dispatch => ({
  addFavorite: params => dispatch(actionAddFavorite(params)),
  formChange: params => dispatch(actionFormChange(params)),
  removeFavorite: params => dispatch(actionRemoveFavorite(params)),
  fetchDogBreeds: params => dispatch(actionFetchDogBreeds(params)),
  fetchDogImage: params => dispatch(actionFetchDogImage(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
