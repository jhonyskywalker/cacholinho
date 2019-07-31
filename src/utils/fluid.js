import { css } from 'styled-components';

const fluid = props => (props.fluid ? css`width: 100%;` : '');

export default fluid;
