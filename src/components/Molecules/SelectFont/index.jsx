import React from 'react';
import Select from 'react-select';

const fontOptions = [
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Saira Stencil One', label: 'Saira Stencil One'},
  { value: 'Lacquer', label: 'Lacquer' },
  { value: 'Indie Flower', label: 'Indie Flower' },
  { value: 'Lobster', label: 'Lobster' },
];

const fontStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data }) => {
    return {
      ...styles,
      fontFamily: data.value,
    };
  },
  input: styles => ({ ...styles }),
  placeholder: styles => ({ ...styles }),
  singleValue: (styles, { data }) => ({ ...styles, ...{ fontFamily: data.value } }),
};

const SelectFont = (props) => (
  <Select
    {...props}
    label="Single select"
    options={fontOptions}
    styles={fontStyles}
  />
);

export default SelectFont;
