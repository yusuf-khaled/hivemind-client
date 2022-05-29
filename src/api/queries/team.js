import gql from 'graphql-tag';

export const GET_TEAM_BY_MEMBER_ID = gql`
  query team($memberId: String) {
    team(memberId: $memberId) {
      id
      name
      created_at
      updated_at
      deleted_at
    }
  }
`;

export default {
  GET_TEAM_BY_MEMBER_ID,
};
