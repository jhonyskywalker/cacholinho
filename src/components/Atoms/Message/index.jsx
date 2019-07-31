import styled from 'styled-components';
import designSystem from 'designSystem';

const Message = styled.p`
  background-color: ${designSystem.color.green};
  color: ${designSystem.color.white};
  padding: ${designSystem.size.s};
  font-weight: ${designSystem.font.weight.bold};
  font-size: ${designSystem.size.base};
  border-radius: ${designSystem.size.s};
`;

export default Message;
