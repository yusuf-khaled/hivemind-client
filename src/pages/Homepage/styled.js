import styled, { keyframes } from 'styled-components';
import { Box } from '@material-ui/core';

const clickImageAnimation = keyframes`
  0%{transform: translateY(-5%);transition: ease 0.5s;}
  50%{transform: translateY(5%);transition: ease 0.5s;}
`;

export const ClickImage = styled(Box)`
  margin: 60px 0px;
  transform: translateY(-5%);
  animation-name: ${clickImageAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;
