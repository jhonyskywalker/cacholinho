import axios from 'axios';

const breeds = params => (
  axios.get(`${process.env.API_DOG}/breeds/list/all`)
);

const image = params => (
  axios.get(`${process.env.API_DOG}/breed/${params.breed}/images/random`)
);

export default {
  breeds,
  image,
};
