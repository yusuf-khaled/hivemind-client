import styled from 'styled-components';
import { DialogTitle, TextField, DialogContentText, InputLabel } from '@material-ui/core';

export const Title = styled(DialogTitle)`
  font-family: ${({ theme }) => theme.typography.technoFont};
  .MuiTypography-h6 {
    font-family: ${({ theme }) => theme.typography.technoFont};
  }
`;

export const Textbox = styled(TextField)`
  margin: 20px;
`;

export const TeamText = styled(DialogContentText)`
  margin-top: 15px;
  font-weight: bold;
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const DropdownInputLabel = styled(InputLabel)`
  width: 10vw;
`
