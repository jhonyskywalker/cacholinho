import React from 'react';
import styled, { css } from 'styled-components';
import designSystem from 'designSystem';
import { breakpoint } from 'utils';

import Form from '../Form';

const PageHighlight = styled.div`
  display: flex;

  ${breakpoint('for-phone-only', css`
    flex-direction: column;
  `)}
`;

const PageHightlightItem = styled.div`
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

const Top = styled(PageHightlightItem)`
  background-color: ${designSystem.color.greenDark};
`;

const Botom = styled(PageHightlightItem)`
  background-color: ${designSystem.color.yellowDark};
`;

const TitlePage = styled.h2`
  font-size: ${designSystem.size.l};
  margin: 0 auto;
  color: ${designSystem.color.white};
  line-height: ${designSystem.size.xl};
`;

export default (props) => (
  <PageHighlight>
    <Top>
      <TitlePage>
        Adicione seus CachoLinhos favoritos.
      </TitlePage>
    </Top>

    <Botom>
      <Form
        dog={props.dog}
        handleSave={props.handleSave}
        handleChange={props.handleChange}
        state={props.state}
      />
    </Botom>
  </PageHighlight>
);
