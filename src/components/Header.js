// components/Header.js
import React from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.elementsColor};
  @media only screen and (min-width: 768px) {
    padding: 0 5rem;
  }

  h1 {
    color: ${(props) => props.theme.textColor};
  }
`;

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <HeaderContainer>
      <h1>Where in the world?</h1>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
    </HeaderContainer>
  );
};

export default Header;
