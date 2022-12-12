import React, { useState } from 'react';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import Header from '../../components/Header';
import { Typography } from '@material-ui/core';

import BubblesGraphic from '../../components/BubblesGraphic/BubblesGraphic';
import {
  BackgroundContainer,
  ColumnButtonContainer,
  PageContainer,
  ContentContainer,
  PrimaryButton,
  SecondaryButton,
} from '../../styles/shared-styled-components';

// MuiTelInput Docs:
// https://viclafouch.github.io/mui-tel-input/docs/playground/

// Expected length (including country code)
const expectedPhoneNumberLength = 10;

const inputContainsError = (isValidInput, newLength) => {
  return !isValidInput && newLength >= expectedPhoneNumberLength;
};

const Signup = () => {
  const [phone, setPhone] = useState('');
  const [displayErrorState, setDisplayErrorState] = useState(false);
  const [continueDisabled, setContinueDisabled] = useState(true);

  const handleChange = (newPhoneNumber, info) => {
    const { countryCallingCode } = info;
    const isValidInput = matchIsValidTel(newPhoneNumber);
    const newLength = newPhoneNumber.replace(/\D/g,'')?.length - countryCallingCode?.length;
    setPhone(newPhoneNumber);
    setDisplayErrorState(inputContainsError(isValidInput, newLength));
    setContinueDisabled(!(isValidInput && newLength >= expectedPhoneNumberLength));
  }

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
                Enter your mobile number
              </Typography>
            </div>
            <div>
              <MuiTelInput
                value={phone}
                helperText={displayErrorState ? "Please enter a valid phone number." : " "}
                autoFocus
                onChange={handleChange}
                focusOnSelectCountry
                forceCallingCode
                error={displayErrorState}
                defaultCountry="CA"
              />
            </div>
            <ColumnButtonContainer>
              <PrimaryButton
                onClick={() => console.log("Continue")}
                disabled={continueDisabled}
                fullWidth
              >
                Continue
              </PrimaryButton>
              <SecondaryButton
                onClick={() => console.log("Go back")}
                size="large"
              >
                Go to Log In
              </SecondaryButton>
            </ColumnButtonContainer>
          </ContentContainer>
        </PageContainer>
      </BackgroundContainer>
      <BubblesGraphic/>
    </>
  );
};

export default Signup;
