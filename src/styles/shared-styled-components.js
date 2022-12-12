import styled from 'styled-components';
import { Container, Button } from '@material-ui/core';

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#f3f6fa, #f6f9fb, #7ca5c2);
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  .MuiContainer-maxWidthLg {
    max-width: 100% !important;
  }
`;

export const PageContainer = styled(Container)`
  margin-top: 40px;
  width: calc(100% - 80px);
`;

export const ContentContainer = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  row-gap: 30px;
  flex-direction: column;
  .MuiTypography-h3 {
    font-family: ${({ theme }) => theme.typography.typeFont};
    font-size: 36px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.blueText};
  }
  .MuiTypography-h5 {
    font-family: ${({ theme }) => theme.typography.typeFont};
    font-size: 17px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.greyText};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const RowButtonContainer = styled(ButtonContainer)`
  flex-direction: row;
`;

export const ColumnButtonContainer = styled(ButtonContainer)`
  flex-direction: column;
  align-items: center;
`;

export const PrimaryButton = styled(Button)`
  border-radius: 100px;
  cursor: pointer;
  width: 15vw;
  background-color: #7CA5C3;
  color: white;
  font-family: ${({ theme }) => theme.typography.typeFont};
  font-size: 14px;
  font-weight: bold;
  text-transform: none;
  &:hover {
    background-color: #08649c;
  }
  &:disabled {
    background-color: #EEEEEE;
  }
`;

export const SecondaryButton = styled(Button)`
  border-radius: 100px;
  cursor: pointer;
  width: 15vw;
  color: #08649c;
  font-family: ${({ theme }) => theme.typography.typeFont};
  font-size: 14px;
  font-weight: bold;
  text-transform: none;
  &:hover {
    background-color: #7CA5C3;
  }
  &:disabled {
    background-color: #EEEEEE;
  }
`;
