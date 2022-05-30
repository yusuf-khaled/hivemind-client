import { GET_HIVEMINDS_BY_MEMBER_ID } from '../queries/hivemind';
import { useQuery, useMutation } from "@apollo/react-hooks";
import get from 'lodash/get';

// React hooks must start with the prefix 'use'
export const useHiveMindByMemberId = (memberId) => {
  console.log('gonna query for member ID', memberId);
  console.log('gonna run this query:', GET_HIVEMINDS_BY_MEMBER_ID);
  const { data, error, refetch, loading } = useQuery(GET_HIVEMINDS_BY_MEMBER_ID, {
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
    refetch,
    hiveminds: get(data, 'hiveminds'),
  };
};

export default {
  useHiveMindByMemberId,
};
