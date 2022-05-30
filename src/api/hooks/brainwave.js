import { GET_BRAINWAVES_BY_MEMBER_ID } from '../queries/brainwave';
import { useQuery, useMutation } from "@apollo/react-hooks";
import get from 'lodash/get';

// React hooks must start with the prefix 'use'
export const useBrainWavesByMemberId = (memberId) => {
  console.log('gonna query for member ID', memberId);
  const { data, error, refetch, loading } = useQuery(GET_BRAINWAVES_BY_MEMBER_ID, {
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
    brainwaves: get(data, 'brainwaves'),
  };
};

export default {
  useBrainWavesByMemberId,
};
