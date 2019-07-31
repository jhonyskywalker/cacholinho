import React from 'react';
import styled, { css } from 'styled-components';
import designSystem from 'designSystem';
import { breakpoint } from 'utils';

import Form from '../Form';

const Tool = styled.div`
  display: flex;

  ${breakpoint('for-phone-only', css`
    flex-direction: column;
  `)}
`;

const Content = styled.div`
  padding: ${designSystem.size.l};
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoint('for-tablet-portrait-up', css`
    width: 50%;
  `)}

  ${breakpoint('for-phone-only', css`
    flex-direction: column;
    width: 100%;
  `)}
`;

const ContentLeft = styled(Content)`
  background-color: ${designSystem.color.greenDark};
`;

const ContentRight = styled(Content)`
  background-color: ${designSystem.color.yellowDark};
`;

const TitlePage = styled.h2`
  font-size: ${designSystem.size.l};
  margin: 0 auto;
  color: ${designSystem.color.white};
  line-height: ${designSystem.size.xl};
`;

export default (props) => (
  <Tool>
    <ContentLeft>
      <TitlePage>
        Adicione seus CachoLinhos favoritos.
      </TitlePage>
    </ContentLeft>

    <ContentRight>
      <Form
        dog={props.dog}
        handleSave={props.handleSave}
        handleChange={props.handleChange}
        handleImage={props.handleImage}
        state={props.state}
      />
    </ContentRight>
  </Tool>
);
