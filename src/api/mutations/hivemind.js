import gql from 'graphql-tag';

export const CREATE_HIVEMIND = gql`
  mutation CreateHiveMind($input: CreateHiveMindInput){
    createHiveMind(input: $input){
      id
      name
      code
      goal
      teamName
      teamId
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default {
  CREATE_HIVEMIND,
};
