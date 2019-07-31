import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import designSystem from 'designSystem';
import { SketchPicker } from 'react-color';

import SelectFont from '../../Molecules/SelectFont';
import Dog from '../../Molecules/Dog';
import Input from '../../Atoms/Input';
import Button from '../../Atoms/Button';
import Message from '../../Atoms/Message';
import Obs from '../../Atoms/Obs';

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormItem = styled.div`
  margin-bottom: ${designSystem.size.base};

  label {
    margin-bottom: ${designSystem.size.s};
    display: inline-block;
    font-weight: ${designSystem.font.weight.bold};
  }
`;

const FormMessage = (props) => (
  <FormItem>
    {props.state.saved && <Message>Cacholo Salvo!</Message>}
  </FormItem>
);

const FormSelectBreed = (props) => (
  <FormItem>
    <label>Escolha o tipo de cacholinho:</label>
    <Select
      name="breed"
      onChange={props.handleChange}
      options={props.dog.breeds.payload}
    />
  </FormItem>
);

const FormName = (props) => (
  <FormItem>
    <label>Qual o nome do cacholinho?</label>
    <Input
      name="name"
      type="text"
      value={props.state.name}
      onChange={event => props.handleChange({ value: event.target.value }, { name: event.target.name })}
    />
  </FormItem>
);

const FormSelectColor = (props) => (
  <FormItem>
    <label>Escolha a cor do texto:</label>
    <SketchPicker
      color={ props.state.color }
      onChangeComplete={event => props.handleChange({ value: event.hex }, { name: 'color' })}
    />
  </FormItem>
);

const FormSelectFont = (props) => (
  <FormItem>
    <label>Escolha a fonte:</label>
    <SelectFont
      name="font"
      onChange={props.handleChange}
    />
  </FormItem>
);

const FormPreview = (props) => (
  <FormItem>
    <label>Preview do cacholinho:</label>
    <Dog
      image={props.dog.image.payload}
      font={props.state.font}
      color={props.state.color}
      name={props.state.name}
      handleChange={props.handleChange}
      position={props.state.position}
    />

    <Button onClick={props.handleImage}>
      Mudar imagem
    </Button>

    <Obs>Obs: você pode arrastar o texto para um melhor posicionamento.</Obs>
  </FormItem>
);

const FormButton = (props) => (
  <FormItem>
    <Button
      type="button"
      onClick={props.handleSave}
    >
      salvar
    </Button>
  </FormItem>
);

export default (props) => (
  <Form>
    <FormSelectBreed {...props} />
    <FormName {...props} />
    <FormSelectColor {...props} />
    <FormSelectFont {...props} />
    <FormPreview {...props} />
    <FormButton {...props} />
    <FormMessage {...props} />
  </Form>
);
