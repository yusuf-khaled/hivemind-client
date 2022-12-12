import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, useLocation, Route, Link } from 'react-router-dom';
import { AppBar, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import throttle from 'lodash/throttle';

import Paths from '../../Paths';

import {
  NavToolbar,
  IconFab,
  StyledTeamIcon,
  StyledHiveIcon,
  StyledWaveIcon,
  StyledMapIcon,
  StyledPaymentsIcon,
} from './styled';

const Header = () => {
  const location = useLocation();

  return (
      <div>
        <AppBar position="static">
          <NavToolbar>
            <Link to={Paths.hivemind}>
              <Tooltip title="HIVES" placement="top-start">
                <IconFab>
                  <StyledHiveIcon/>
                </IconFab>
              </Tooltip>
            </Link>
            <Link to={Paths.brainwaves}>
              <Tooltip title="BRAINWAVES" placement="top-start">
                <IconFab>
                  <StyledWaveIcon/>
                </IconFab>
              </Tooltip>
            </Link>
            <Link to={Paths.teammates}>
              <Tooltip title="TEAMMATES" placement="top-start">
                <IconFab>
                  <StyledTeamIcon/>
                </IconFab>
              </Tooltip>
            </Link>
            <Link to={Paths.paths}>
              <Tooltip title="PATHS" placement="top-start">
                <IconFab>
                  <StyledMapIcon/>
                </IconFab>
              </Tooltip>
            </Link>
            <Link to={Paths.earnings}>
              <Tooltip title="EARNINGS" placement="top-start">
                <IconFab>
                  <StyledPaymentsIcon/>
                </IconFab>
              </Tooltip>
            </Link>
          </NavToolbar>
        </AppBar>
      </div>
  );
};

export default Header;
