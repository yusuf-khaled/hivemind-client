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
import { useMutation } from '@apollo/client';
import { useHiveMindByMemberId } from '../../api/hooks/hivemind';
import { CREATE_HIVEMIND } from '../../api/mutations/hivemind';

import Header from '../../components/Header';
import HiveMindCard from '../../components/HiveMindCard';
import CreateHiveMindModal from '../../components/CreateHiveMindModal';
import Config from '../../Config';

import {
  PageContainer,
  HiveMindCardContainer,
  CreateHiveMindButtonContainer,
  CreateHiveMindButton,
} from './styled';
import hivemind from '../../api/queries/hivemind';

const HiveMind = () => {
  const { memberId } = Config;
  const { hiveminds, refetch } = useHiveMindByMemberId(memberId);
  const [createHiveMind, { data: createHiveMindData }] = useMutation(CREATE_HIVEMIND);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    console.log('Got createHiveMindData!', createHiveMindData);
    refetch();
  }, [createHiveMindData]);

  const firstHiveMind = first(hiveminds);
  const teamId = get(firstHiveMind, 'teamId');
  const teamName = get(firstHiveMind, 'teamName');
  console.log('teamId: ', teamId);

  const onCreateHiveMind = async (data) => {
    await createHiveMind({
      variables: {
        input: {
          name: data.name,
          goal: data.goal,
          code: data.code,
          createdBy: memberId,
          teamId: teamId,
        }
      },
    });
    setIsCreateModalOpen(false);
  };

  return hiveminds && (
    <>
      <Header/>
      <PageContainer>
          <CreateHiveMindButtonContainer>
            <CreateHiveMindButton
              onClick={() => setIsCreateModalOpen(true)}
            >
              CREATE HIVE MIND
            </CreateHiveMindButton>
          </CreateHiveMindButtonContainer>
          <HiveMindCardContainer
            maxWidth="lg"
          >
            {map(hiveminds, (hm) => (
              <HiveMindCard
                hivemind={hm}
              />
            ))}
          </HiveMindCardContainer>
        <CreateHiveMindModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onCreateHiveMind={onCreateHiveMind}
          team={{
            id: teamId,
            name: teamName,
          }}
        />
      </PageContainer>
    </>
  );
};

export default HiveMind;
