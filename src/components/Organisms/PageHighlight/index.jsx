import React from 'react';
import styled from 'styled-components';
import designSystem from 'designSystem';

import Form from '../Form';

const TitlePage = styled.h2`
  font-size: ${designSystem.size.l};
  margin: 0 auto;
  color: ${designSystem.color.white};
  line-height: ${designSystem.size.xl};
`;

const PageHightlightItem = styled.div`
  padding: ${designSystem.size.l};
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Left = styled(PageHightlightItem)`
  background-color: ${designSystem.color.greenDark};
`;

const Right = styled(PageHightlightItem)`
  background-color: ${designSystem.color.yellowDark};
`;

const PageHighlight = styled.div`
  display: flex;
`;

const Title = () => (
  <div>
    <TitlePage>
      Adicione seus CachoLinhos favoritos.
    </TitlePage>
  </div>
);

export default (props) => (
  <PageHighlight>
    <Left>
      <Title />
    </Left>

    <Right>
      <Form
        dog={props.dog}
        handleSave={props.handleSave}
        handleChange={props.handleChange}
        state={props.state}
      />
    </Right>
  </PageHighlight>
);
