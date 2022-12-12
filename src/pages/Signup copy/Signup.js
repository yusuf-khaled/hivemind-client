import React, { useState } from 'react';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import Header from '../../Header';
import { Typography } from '@material-ui/core';
import isEmpty from 'lodash/isEmpty';

import {
  BackgroundContainer,
  PageContainer,
  ContentContainer,
  RowButtonContainer,
  PrimaryButton,
} from '../../../styles/shared-styled-components';
import {
  ClickImage,
  BubblesImage,
} from './styled';

const defaultCanadianPhoneNumberPrefix = '+1';

const Signup = () => {
  const [phone, setPhone] = useState('');

  const handleChange = (newPhoneNumber, info) => {
    console.log("newPhoneNumber:", newPhoneNumber);
    // If given an empty input, reset to the default Canadian phone #
    if (isEmpty(newPhoneNumber)) {
      console.log("setPhone to:", defaultCanadianPhoneNumberPrefix);
      setPhone(defaultCanadianPhoneNumberPrefix);
      return;
    }
    console.log("Is valid: ", matchIsValidTel(newPhoneNumber));
    console.log("setPhone to:", newPhoneNumber);
    console.log('info:', info);
    setPhone(newPhoneNumber);
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
                Enter your Mobile number
              </Typography>
            </div>
            <div>
              <MuiTelInput
                value={phone}
                onChange={handleChange}
                disableDropdown
                focusOnSelectCountry
                defaultCountry="CA"
                onlyCountries={['CA']}
              />
            </div>
          </ContentContainer>
        </PageContainer>
      </BackgroundContainer>
      <BubblesImage
        component="img"
        alt="Click Image"
        src="https://dd7tel2830j4w.cloudfront.net/f1666024043460x594849633642856800/test-new-dots.svg"
      />
    </>
  );
};

export default Signup;
