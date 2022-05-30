import gql from 'graphql-tag';

export const GET_TEAM_BY_MEMBER_ID = gql`
  query team($memberId: String) {
    team(memberId: $memberId) {
      id
      name
      members {
        id
        name
        email
        title
        avatarUrl
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default {
  GET_TEAM_BY_MEMBER_ID,
};
