import styled from 'styled-components';
import designSystem from 'designSystem';

const Skeleton = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  background-color: ${props => (props.background ? designSystem.color[props.background] : designSystem.color.grayLighter)};
`;

export default Skeleton;
