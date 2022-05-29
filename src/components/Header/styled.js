import styled from 'styled-components';
import { Toolbar, Fab } from '@material-ui/core';
import TeamIcon from '@mui/icons-material/PeopleAlt';
import HiveIcon from '@mui/icons-material/Hive';
import WaveIcon from '@mui/icons-material/Waves';
import MapIcon from '@mui/icons-material/Map';

export const NavToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 20px;
`;

export const IconFab = styled(Fab)`
  margin: 15;
  background-color: white;
`;

export const StyledTeamIcon = styled(TeamIcon)`
  color: ${({ theme }) => theme.color.primary};
`;

export const StyledHiveIcon = styled(HiveIcon)`
  color: ${({ theme }) => theme.color.primary};
`;

export const StyledWaveIcon = styled(WaveIcon)`
  color: ${({ theme }) => theme.color.primary};
`;

export const StyledMapIcon = styled(MapIcon)`
  color: ${({ theme }) => theme.color.primary};
`;
