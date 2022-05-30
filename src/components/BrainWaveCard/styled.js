import styled from 'styled-components';
import { Card, Button, Fab, Avatar } from '@material-ui/core';

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

export const TypeContainer = styled(Fab)`
  background-color: ${({ theme }) => theme.color.light};
`;

export const CodeTextContainer = styled.p`
  font-family: ${({ theme }) => theme.typography.technoFont};
  font-size: 25px;
  font-weight: bold;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  .MuiTypography-h5 {
    font-family: ${({ theme }) => theme.typography.technoFont};
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PeopleContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
  width: 55px !important;
  height: 55px !important;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const TransmitButton = styled(Button)`
  font-family: ${({ theme }) => theme.typography.technoFont};
  font-weight: bold;
`;