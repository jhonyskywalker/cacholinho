import React, { Fragment } from 'react';
import styled from 'styled-components';
import designSystem from 'designSystem';

import Dog from '../../Molecules/Dog';

const Button = styled.button`
  border-radius: 50%;
  text-transform: uppercase;
  background-color: ${designSystem.color.black};
  color: ${designSystem.color.white};
  width: ${designSystem.size.m};
  height: ${designSystem.size.m};
  border: none;
  position: absolute;
  top: ${designSystem.size.m};
  right: ${designSystem.size.m};
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: ${designSystem.size.l};
  margin-top: ${designSystem.size.l};
  text-align: center;
`;

const DogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${designSystem.size.l} ${designSystem.size.m};
  justify-content: center;
`;

const DogItem =styled.div`
  padding: ${designSystem.size.s};
  position: relative;
`;

export default (props) => (
  <Fragment>
    <Title>Meus Cacholinhos</Title>
    <DogsContainer>
      {props.favorite.payload.map(item => (
        <DogItem key={item.uuid}>
          <Dog
            image={item.image}
            font={item.font}
            color={item.color}
            name={item.name}
            position={item.position}
          />
          <Button
            type="button"
            onClick={() => props.removeFavorite(item)}
          >
            X
          </Button>
        </DogItem>
      ))}
    </DogsContainer>
  </Fragment>
);
