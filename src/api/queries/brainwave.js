import gql from 'graphql-tag';

export const GET_BRAINWAVES_BY_MEMBER_ID = gql`
  query brainwaves($memberId: String) {
    brainwaves(memberId: $memberId) {
      id
      code
      createdBy
      createdByAvatarUrl
      assignedTo
      assignedToAvatarUrl
      hiveMindId
      dueAt
      title
      description
      type
      typeIconUrl
      status
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default {
  GET_BRAINWAVES_BY_MEMBER_ID,
};
