import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, useLocation, Route, Link } from 'react-router-dom';
import { AppBar, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  Grid, CardContent, Typography, Avatar, TextField,
  DialogActions, Buttons,
} from '@material-ui/core';

import Paths from '../../Paths';

import {
  CardContainer,
  StyledCard,
  StyledCardHeader,
  CreatorContainer,
  StyledAvatar,
} from './styled';

const HiveMindCard = ({ hivemind }) => {
  const location = useLocation();

  return (
    <Grid container maxWidth="md">
      <Grid item xs={6}>
        <StyledCard>
          <StyledCardHeader
            title={`${hivemind.name} (${hivemind.code})`}
          />
          <CardContent>
            <Typography variant="body1" color="textSecondary">
              Goal: {hivemind.goal}
            </Typography>
            <CreatorContainer>
              <Typography variant="body1" color="textSecondary">
                Created by {hivemind.createdBy}
              </Typography>
              <StyledAvatar src={hivemind.createdByAvatarUrl}/>
            </CreatorContainer>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default HiveMindCard;
