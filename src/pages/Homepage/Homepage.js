import React from 'react';

import Header from '../../components/Header';
import { Typography } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

import Paths from '../../Paths';
import BubblesGraphic from '../../components/BubblesGraphic/BubblesGraphic';
import {
  BackgroundContainer,
  PageContainer,
  ContentContainer,
  RowButtonContainer,
  PrimaryButton,
} from '../../styles/shared-styled-components';
import { ClickImage } from './styled';

const Homepage = () => {
  let navigate = useNavigate();

  const onClickSignup = () => {
    navigate(Paths.signup);
  };

  return (
    <>
      <Header/>
      <BackgroundContainer>
        <PageContainer>
          <ContentContainer>
            <div>
              <Typography
                variant="h3"
              >
                Welcome to the Dentacloud Portal
              </Typography>
            </div>
            <div>
              <Typography
                variant="h5"
              >
                Value your dental practice in 5 easy steps
              </Typography>
            </div>
            <div>
              <ClickImage
                component="img"
                alt="Click Image"
                src="https://dd7tel2830j4w.cloudfront.net/f1663000290172x692707381383235800/Cloud%20CLick%201.svg"
              />
            </div>
            <RowButtonContainer>
              <PrimaryButton
                onClick={() => onClickSignup()}
              >
                Sign Up
              </PrimaryButton>
              <PrimaryButton>
                Log In
              </PrimaryButton>
            </RowButtonContainer>
          </ContentContainer>
        </PageContainer>
      </BackgroundContainer>
      <BubblesGraphic/>
    </>
  );
};

export default Homepage;
