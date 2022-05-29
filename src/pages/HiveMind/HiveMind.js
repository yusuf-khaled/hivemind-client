import { useNavigate, useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import compose from 'lodash/fp/compose';
import filter from 'lodash/filter';
import find from 'lodash/find';
import first from 'lodash/first';
import get from 'lodash/get';
import gql from 'graphql-tag';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import join from 'lodash/join';
import map from 'lodash/map';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { useTeamByMemberId } from '../../api/hooks/teams';

import Header from '../../components/Header';
import CreateHiveMindModal from '../../components/CreateHiveMindModal';

import {
  Container,
  CreateHiveMindButton,
} from './styled';

const HiveMind = () => {
  const memberId = 'ca37f617-d307-46b3-90ff-29e0f60df321';
  const { team } = useTeamByMemberId(memberId);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    console.log('Got team!', team);
  }, [team]);

  return (
    <>
      <Header/>
      <Container>
        <CreateHiveMindButton
          onClick={() => setIsCreateModalOpen(true)}
        >
          CREATE NEW HIVE MIND
        </CreateHiveMindButton>
        <CreateHiveMindModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          team={team}
        />
      </Container>
    </>
  );
};

export default HiveMind;
