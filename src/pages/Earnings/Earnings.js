import { Typography } from '@material-ui/core';
import React from 'react';

import Header from '../../components/Header';

import {
  PageContainer,
  LimitlessTextContainer,
} from './styled';

const Earnings = () => (
  <>
    <Header/>
    <PageContainer>
      <LimitlessTextContainer>
        <Typography variant="h4">
            Start an incentive plan now, and watch your team share knowledge like never before. Like 'Limitless', but legal - and real. <br></br><br></br>HiveMind awaits...
          </Typography>
      </LimitlessTextContainer>
      <img
        src="https://storage.googleapis.com/artifacts.entrepreneurfirsttakehome.appspot.com/icons/Screen%20Shot%202022-05-29%20at%208.04.48%20PM.png"
      />
    </PageContainer>
  </>
);

export default Earnings;
