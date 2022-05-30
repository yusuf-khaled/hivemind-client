import { Typography } from '@material-ui/core';
import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import { useTeamByMemberId } from '../../api/hooks/team';

import Header from '../../components/Header';
import TeamMateCard from '../../components/TeamMateCard';
import Config from '../../Config';

import {
  PageContainer,
  TeamNameContainer,
  WittyTextContainer,
  TeamMatesContainer,
} from './styled';

const getRandomHypeText = (teamName) => {
  if (!teamName) {
    return '';
  }
  const fillerTeamNameString = '<TEAMNAME>';
  const hypeTexts = [
    `Wowza. The ${fillerTeamNameString} team's got some serious brain power...`,
    `MJ who? ${fillerTeamNameString} is the REAL Dream Team.`,
    `We don't just observe reality, we create our own version of it. That's the ${fillerTeamNameString} way.`
  ];
  const text = hypeTexts[Math.floor(Math.random() * hypeTexts.length)];
  return text.replace(fillerTeamNameString, `'${teamName}'`);
};

const TeamMates = () => {
  const { memberId } = Config;
  const { team } = useTeamByMemberId(memberId);
  console.log('team: ', team);

  const hypeText = getRandomHypeText(get(team, 'name'));

  const teamMates = get(team, 'members', []);

  return team && (
    <>
      <Header/>
      <PageContainer>
        <TeamNameContainer>
          <Typography variant='h3'>
            {team.name}
          </Typography>
        </TeamNameContainer>
        <WittyTextContainer>
          <Typography variant='h5'>
            {hypeText}
          </Typography>
        </WittyTextContainer>
        <TeamMatesContainer>
          {map(teamMates, (tm) => (
            <TeamMateCard
              teammate={tm}
            />
          ))}
        </TeamMatesContainer>
      </PageContainer>
    </>
  );
};

export default TeamMates;
