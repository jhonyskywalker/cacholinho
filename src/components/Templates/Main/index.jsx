import React, { Fragment } from 'react';
import styled from 'styled-components';
import designSystem from 'designSystem';

const Header = styled.header`
  background-color: ${designSystem.color.white};
  width: 100%;
  padding: ${designSystem.size.m} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoPrimary = styled.span`
  color: ${designSystem.color.yellowDark};
`;

const LogoSecondary = styled.span`
  color: ${designSystem.color.greenDark};
`;

const Main = ({ children }) => (
  <Fragment>
    <Header>
      <h1>
        <LogoPrimary>Cacho</LogoPrimary>
        <LogoSecondary>Linho</LogoSecondary>
      </h1>
    </Header>

    {children}
  </Fragment>
);

export default Main;
