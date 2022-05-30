import styled from 'styled-components';
import { Container } from '@material-ui/core';

export const PageContainer = styled.div`
  display: flex;
  padding: 50px;
  padding-top: 0px;
  margin: 50px;
  flex-direction: column;
  .MuiContainer-root {
    margin-left: 0px !important;
  }
`;

export const LimitlessTextContainer = styled.div`
  margin-bottom: 20px;
  .MuiTypography-h4 {
    font-family: ${({ theme }) => theme.typography.technoFont};
    font-weight: bold;
  }
`;


