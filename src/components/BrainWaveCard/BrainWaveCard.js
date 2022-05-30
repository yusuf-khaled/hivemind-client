import React from 'react';
import {
  Grid, CardContent, Typography, Select, MenuItem,
} from '@material-ui/core';

import {
  StyledCard,
  StyledCardHeader,
  DescriptionContainer,
  PeopleContainer,
  StyledAvatar,
  TypeContainer,
  CodeTextContainer,
  StatusContainer,
  TransmitButton,
} from './styled';
import constants from '../../Constants';

const { brainWaveStatuses } = constants;
const statuses = Object.values(brainWaveStatuses);

const BrainWaveCard = ({ brainwave, onClickTransmit }) => {
  console.log('Object.values(brainWaveStatuses): ', Object.values(brainWaveStatuses));

  return (
    <Grid container maxWidth="md">
      <Grid item xs={6}>
        <StyledCard>
          <StyledCardHeader>
            <TypeContainer disabled>
              <img
                src={brainwave.typeIconUrl}
                title={brainwave.type}
                style={{'height': '35px', 'width': '35px'}}
              />
            </TypeContainer>
            <div>
              <CodeTextContainer variant="body1" color="textSecondary">
                {brainwave.type.charAt(0).toUpperCase() + brainwave.type.slice(1)}: {brainwave.code}
              </CodeTextContainer>
            </div>
          </StyledCardHeader>
          <CardContent>
            <Typography variant="h5" color="textSecondary">
              {brainwave.title}
            </Typography>
            <DescriptionContainer>
              <Typography variant="body1" color="textSecondary">
                {brainwave.description}
              </Typography>
            </DescriptionContainer>
            <PeopleContainer>
              <Typography variant="body1" color="textSecondary">
                Created by {brainwave.createdBy}
              </Typography>
              <StyledAvatar src={brainwave.createdByAvatarUrl}/>
            </PeopleContainer>
            <PeopleContainer>
              <Typography variant="body1" color="textSecondary">
                Assigned to {brainwave.assignedTo}
              </Typography>
              <StyledAvatar src={brainwave.assignedToAvatarUrl}/>
            </PeopleContainer>
            <StatusContainer>
              <Typography variant="body1" color="textSecondary">
                Due: {new Date(brainwave.dueAt).toLocaleDateString()}
              </Typography>
              <Select
                id="status"
                value={brainWaveStatuses[brainwave.status]}
                label="Status"
              >
                {statuses.map(statusOption => (
                  <MenuItem value={statusOption}>{statusOption}</MenuItem>
                ))}
              </Select>
              <TransmitButton onClick={onClickTransmit}>Transmit</TransmitButton>
            </StatusContainer>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default BrainWaveCard;
