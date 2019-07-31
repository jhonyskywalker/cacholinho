import React, { Component } from 'react';

import TemplateMain from '../../Templates/Main';
import Tool from '../../Organisms/Tool';
import Dogs from '../../Organisms/Dogs';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchDogBreeds();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dog.image.payload !== this.props.dog.image.payload) {
      this.props.formChange({ image: this.props.dog.image.payload });
    }
  }

  handleChange = (data, event) => {
    this.props.formChange({ [event.name]: data.value, message: false });

    if (event.name === 'breed') {
      this.props.fetchDogImage({ breed: data.value });
    }
  }

  handleImage = () => {
    if (this.props.form.payload.breed.length > 0) {
      this.props.fetchDogImage({ breed: this.props.form.payload.breed });
    }
  }

  handleClearForm = () => {
    const clearForm = setTimeout(() => {
      this.props.formChange({
        breed: '',
        name: '',
        color: '',
        font: '',
        image: '',
        position: null,
        message: false,
      });
    }, 4000);
  }

  handleSave = () => {
    this.props.formChange({ message: true });
    this.props.addFavorite(this.props.form.payload);
    this.handleClearForm();
  }

  render() {
    const { dog, favorite, removeFavorite } = this.props;

    return (
      <TemplateMain>
        <Tool
          dog={dog}
          handleSave={this.handleSave}
          handleChange={this.handleChange}
          handleImage={this.handleImage}
          state={this.props.form.payload}
        />

        <Dogs
          favorite={favorite.payload}
          removeFavorite={removeFavorite}
        />
      </TemplateMain>
    );
  }
}

export default HomePage;
