import gql from 'graphql-tag';

export const GET_HIVEMINDS_BY_MEMBER_ID = gql`
  query hiveminds($memberId: String) {
    hiveminds(memberId: $memberId) {
      id
      name
      created_at
      updated_at
      deleted_at
    }
  }
`;

export default {
  GET_HIVEMINDS_BY_MEMBER_ID,
};
