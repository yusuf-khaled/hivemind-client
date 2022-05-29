import styled from 'styled-components';
import { DialogTitle } from '@material-ui/core';
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
