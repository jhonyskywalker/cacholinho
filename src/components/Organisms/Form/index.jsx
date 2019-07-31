import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import designSystem from 'designSystem';
import { SketchPicker } from 'react-color';

import SelectFont from '../../Molecules/SelectFont';
import Dog from '../../Molecules/Dog';

const Input = styled.input`
  width: 100%;
  height: 38px;
  border-radius: 4px;
  border: 1px solid hsl(0,0%,80%);
  font-weight: bold;
  padding: 0 8px;
  font-size: 14px;
  font-weight: normal;
  color: hsl(0,0%,20%);
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
`;

const Message = styled.p`
  background-color: ${designSystem.color.green};
  color: ${designSystem.color.white};
  padding: ${designSystem.size.base};
  font-weight: ${designSystem.font.weight.bold};
  font-size: ${designSystem.size.m};
`;

const Obs = styled.p`
  color: ${designSystem.color.gray};
  margin-top: ${designSystem.size.base};

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
    <Obs>Obs: você pode arrastar o texto para um melhor posicionamento</Obs>
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
