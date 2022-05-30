import styled from 'styled-components';
import { Card, CardHeader, Chip, Avatar } from '@material-ui/core';

export const CardContainer = styled.div`
  padding: 15;
  height: 100%;
  display: flex;
  flex-direction: column;
  .MuiContainer-root {
    margin: 0px;
  }
`;

export const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 0px;
  background-color: #f8f8f8;
  width: 30vw;
  margin-right: 30px;
`;

export const StyledCardHeader = styled(CardHeader)`
  padding: 10px 16px 16px 16px;
  .MuiTypography-h5 {
    font-family: ${({ theme }) => theme.typography.technoFont};
  }
`;

export const CreatorContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
    width: 55px !important;
    height: 55px !important;
`

