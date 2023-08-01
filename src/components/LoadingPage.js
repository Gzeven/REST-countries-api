// components/LoadingPage.js
import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
  font-weight: bold;
`;

const LoadingPage = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};

export default LoadingPage;
