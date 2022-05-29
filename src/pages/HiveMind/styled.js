import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 50px;
  margin: 50px;
  background-color: magenta;
`;

export const CreateHiveMindButton = styled.button`
  display: flex;
  padding: 10px;
  background-color: orange;
  align-items: center;
  align-self: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: ${({ theme }) => theme.spacing.half}px;
  padding-left: ${({ theme }) => theme.spacing.default}px;
  padding-right: ${({ theme }) => theme.spacing.default}px;
  padding-top: ${({ theme }) => theme.spacing.half}px;
  user-select: none;
  border: 0px solid transparent;
  font-family: ${({ theme }) => theme.typography.technoFont};
`;
