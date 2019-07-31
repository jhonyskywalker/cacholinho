import { connect } from 'react-redux';
import { actionAddFavorite, actionRemoveFavorite } from 'redux-flow/actions/Favorite';
import { actionFetchDogBreeds } from 'redux-flow/actions/Dog/breeds';
import { actionFetchDogImage } from 'redux-flow/actions/Dog/image';

import Home from '../../../components/Pages/Home';

const mapStateToProps = ({
  favorite,
  dog,
}) => ({
  favorite,
  dog,
});

const mapDispatchToProps = dispatch => ({
  addFavorite: params => dispatch(actionAddFavorite(params)),
  removeFavorite: params => dispatch(actionRemoveFavorite(params)),
  fetchDogBreeds: params => dispatch(actionFetchDogBreeds(params)),
  fetchDogImage: params => dispatch(actionFetchDogImage(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
