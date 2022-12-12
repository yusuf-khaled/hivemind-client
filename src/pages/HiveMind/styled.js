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

export const CreateHiveMindButtonContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CreateHiveMindButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  padding-bottom: ${({ theme }) => theme.spacing.half}px;
  padding-left: ${({ theme }) => theme.spacing.default}px;
  padding-right: ${({ theme }) => theme.spacing.default}px;
  padding-top: ${({ theme }) => theme.spacing.half}px;
  user-select: none;
  border: 0px solid transparent;
  font-family: ${({ theme }) => theme.typography.technoFont};
  width: 20vw;
  background-color: ${({ theme }) => theme.color.secondary};
`;

export const HiveMindCardContainer = styled(Container)`
  margin-top: 40px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  // justify-content: space-evenly;
`;



