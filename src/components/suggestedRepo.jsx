import React from 'react';
import styled from 'styled-components';

const suggestedRepo = ({ name, onClick }) => (
  <SuggestedRepoContainer onClick={onClick}>{name}</SuggestedRepoContainer>
);

const SuggestedRepoContainer = styled.button`
  background: var(--suggestedRepo);
  border-radius: 8px;
  border: transparent;
  margin: 10px 0px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: white;
`;

export default suggestedRepo;
