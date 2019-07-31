import React, { Component } from 'react';

import TemplateMain from '../../Templates/Main';
import PageHighlight from '../../Organisms/PageHighlight';
import Dogs from '../../Organisms/Dogs';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breed: '',
      name: '',
      color: '',
      font: '',
      image: '',
      saved: false,
    };
  }

  componentDidMount() {
    this.props.fetchDogBreeds();
  }

  handleChange = (data, event) => {
    this.setState({
      ...this.state,
      [event.name]: data.value,
      saved: false,
    });

    if (event.name === 'breed') {
      this.props.fetchDogImage({ breed: data.value });
    }
  }

  handleSave = () => {
    this.setState({ ...this.state, saved: true });

    this.props.addFavorite({
      ...this.state,
      image: this.props.dog.image.payload,
    });
  }

  render() {
    const { dog } = this.props;

    return (
      <TemplateMain>
        <PageHighlight
          dog={dog}
          handleSave={this.handleSave}
          handleChange={this.handleChange}
          state={this.state}
        />

        <Dogs
          favorite={this.props.favorite}
          removeFavorite={this.props.removeFavorite}
        />
      </TemplateMain>
    );
  }
}

export default HomePage;
