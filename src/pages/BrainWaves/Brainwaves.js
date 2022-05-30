import first from 'lodash/first';
import get from 'lodash/get';
import map from 'lodash/map';
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useBrainWavesByMemberId } from '../../api/hooks/brainwave';
import { CREATE_BRAINWAVE, TRANSMIT_BRAINWAVE } from '../../api/mutations/brainwave';

import Header from '../../components/Header';
import BrainWaveCard from '../../components/BrainWaveCard';
import CreateBrainWaveModal from '../../components/CreateBrainWaveModal';
import TransmitBrainWaveModal from '../../components/TransmitBrainWaveModal';
import Config from '../../Config';

import {
  PageContainer,
  BrainWaveCardContainer,
  CreateBrainWaveButtonContainer,
  CreateBrainWaveButton,
} from './styled';

const BrainWaves = () => {
  const { memberId } = Config;
  const { brainwaves, refetch } = useBrainWavesByMemberId(memberId);
  console.log('brainwaves: ', brainwaves);
  const [createBrainWave, { data: createBrainWaveData }] = useMutation(CREATE_BRAINWAVE);
  const [transmitBrainWave, { data: transmitBrainWaveData }] = useMutation(TRANSMIT_BRAINWAVE);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isTransmitModalOpen, setIsTransmitModalOpen] = useState(false);

  useEffect(() => {
    refetch();
  }, [createBrainWaveData, transmitBrainWaveData]);

  const firstBrainWave = first(brainwaves);
  const hiveMindId = get(firstBrainWave, 'hiveMindId');
  console.log('hiveMindId: ', hiveMindId);

  const onCreateBrainWave = async (data) => {
    await createBrainWave({
      variables: {
        input: {
          hiveMindId,
          creator: memberId,
          assignee: data.assignedToUserId,
          // Hardcoding - didnt want to spend time implementing date picker
          dueAt: '2022-06-03T17:00:00.00Z',
          title: data.title,
          description: data.description,
          type: data.type,
          status: data.status,
        }
      },
    });

    setIsCreateModalOpen(false);
  };

  const onTransmitBrainWave = async (data) => {
    // await transmitBrainWave({
    //   variables: {
    //     content: data,
    //  },
    // });

    setIsTransmitModalOpen(false);
  };

  return (
    <>
      <Header/>
      <PageContainer>
          <CreateBrainWaveButtonContainer>
            <CreateBrainWaveButton
              onClick={() => setIsCreateModalOpen(true)}
            >
              CREATE BRAINWAVE
            </CreateBrainWaveButton>
          </CreateBrainWaveButtonContainer>
          <BrainWaveCardContainer
            maxWidth="lg"
          >
            {map(brainwaves, (bw) => (
              <BrainWaveCard
                brainwave={bw}
                onClickTransmit={() => setIsTransmitModalOpen(true)}
              />
            ))}
          </BrainWaveCardContainer>
        <CreateBrainWaveModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onCreateBrainWave={onCreateBrainWave}
        />
        <TransmitBrainWaveModal
          isOpen={isTransmitModalOpen}
          onClose={() => setIsTransmitModalOpen(false)}
          onTransmitBrainWave={onTransmitBrainWave}
        />
      </PageContainer>
    </>
  );
};

export default BrainWaves;
