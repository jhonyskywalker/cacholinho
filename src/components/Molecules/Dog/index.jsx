import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import designSystem from 'designSystem';

const DogContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 300px;
  padding: 0 16px;
  border-radius: ${designSystem.size.s};
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0,0,0,0.6);
`;

const DogCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${designSystem.color.greenLight};
  background-position: center top;
  background-size: cover;
  background-image: url(${props => props.image});
`;

const DogName = styled.p`
  color: ${props => props.color ? props.color : designSystem.color.white};
  font-family: ${props => props.font};
  font-size: ${designSystem.size.xm};
  text-transform: uppercase;
  position: relative;
  text-align: center;
  word-break: break-word;
  background-color: ${designSystem.color.black};
  padding: 0 8px;
`;

export default (props) => (
  <DogContainer>
    <DogCover image={props.image} />
    {props.handleChange ? (
      <Draggable
        bounds="parent"
        position={props.position}
        onStop={(event, data) => props.handleChange({ value: { x: data.x, y: data.y } }, { name: 'position' })}
      >
        <DogName
          font={props.font}
          color={props.color}
        >
          {props.name}
        </DogName>
      </Draggable>
    ) : (
      <Draggable
        disabled
        bounds="parent"
        position={props.position}
      >
        <DogName
          font={props.font}
          color={props.color}
        >
          {props.name}
        </DogName>
      </Draggable>
    )}
  </DogContainer>
);
