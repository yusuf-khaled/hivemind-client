import { GET_TEAM_BY_MEMBER_ID } from '../queries/team';
import { useQuery, useMutation } from "@apollo/react-hooks";
import get from 'lodash/get';

// React hooks must start with the prefix 'use'
export const useTeamByMemberId = (memberId) => {
  console.log('gonna query for member ID', memberId);
  console.log('gonna run this query:', GET_TEAM_BY_MEMBER_ID);
  const { data, error, loading } = useQuery(GET_TEAM_BY_MEMBER_ID, {
    variables: {
      memberId,
    },
    onError: () => {
      console.log('got error: ', error);
    }
  });

  console.log('got data: ', data);

  return {
    error,
    loading,
    team: get(data, 'team'),
  };
};

export default {
  useTeamByMemberId,
};
