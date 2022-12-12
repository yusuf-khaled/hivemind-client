import React, {  } from 'react';
import { AppBar } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

import Paths from '../../Paths';
import {
  NavToolbar,
  DentacloudIcon,
} from './styled';

const Header = () => {
  let navigate = useNavigate();

  const onClickLogo = () => {
    navigate(Paths.home);
  };

  return (
      <div>
        <AppBar position="static">
          <NavToolbar>
            <DentacloudIcon
              component="img"
              alt="Dentacloud Logo"
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1662985810690x778829721890512900%2Ffavicon.png?w=96&h=64&auto=compress&dpr=2&fit=max"
              onClick={() => onClickLogo()}
            />
          </NavToolbar>
        </AppBar>
      </div>
  );
};

export default Header;
