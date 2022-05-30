import gql from 'graphql-tag';

export const GET_HIVEMINDS_BY_MEMBER_ID = gql`
  query hiveminds($memberId: String) {
    hiveminds(memberId: $memberId) {
      id
      name
      code
      goal
      teamName
      teamId
      createdBy
      createdByAvatarUrl
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default {
  GET_HIVEMINDS_BY_MEMBER_ID,
};
