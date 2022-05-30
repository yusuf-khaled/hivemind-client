import gql from 'graphql-tag';

export const CREATE_BRAINWAVE = gql`
  mutation CreateBrainWave($input: CreateBrainWaveInput){
    createBrainWave(input: $input){
      id
    }
  }
`;

export const TRANSMIT_BRAINWAVE = gql`
  mutation CreateBrainWave($id: ID!, $content: String!){
    createBrainWave(id: $id, content: $content){
      id
    }
  }
`;

export default {
  CREATE_BRAINWAVE,
  TRANSMIT_BRAINWAVE,
};
