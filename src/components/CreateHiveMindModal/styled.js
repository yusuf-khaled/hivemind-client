import styled from 'styled-components';
import { DialogTitle, TextField, DialogContentText } from '@material-ui/core';
import TeamIcon from '@mui/icons-material/PeopleAlt';
import HiveIcon from '@mui/icons-material/Hive';
import WaveIcon from '@mui/icons-material/Waves';
import MapIcon from '@mui/icons-material/Map';

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
