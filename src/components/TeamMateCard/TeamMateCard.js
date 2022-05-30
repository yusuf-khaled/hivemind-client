import React from 'react';
import {
  Grid, CardContent, Typography,
} from '@material-ui/core';

import {
  StyledCard,
  StyledCardHeader,
  TypeContainer,
  CodeTextContainer,
} from './styled';

const TeamMateCard = ({ teammate }) => {
  console.log('teammate', teammate);
  return (
    <Grid container maxWidth="md">
      <Grid item xs={6}>
        <StyledCard>
          <StyledCardHeader>
            <TypeContainer disabled>
              <img
                src={teammate.avatarUrl}
                title="avatar"
                style={{'height': '100px', 'width': '100px', bordeRadius: '6px'}}
              />
            </TypeContainer>
            <div>
              <CodeTextContainer variant="body1" color="textSecondary">
                {teammate.name}
              </CodeTextContainer>
              <Typography variant="h5" color="textSecondary">
              {teammate.title}
            </Typography>
            </div>
          </StyledCardHeader>
          <CardContent>

          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default TeamMateCard;
