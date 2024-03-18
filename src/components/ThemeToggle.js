// components/ThemeToggle.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const ToggleContainer = styled.button`
  display: flex;
  align-items: center;
  gap: .5rem;
  height: 22px;
  color: ${(props) => props.theme.textColor};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 12px;
  font-weight: 6000
 
  svg {
  }

  @media only screen and (min-width: 768px) {
   font-size: 16px;
  }
`;

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      {darkMode ? (
        <>
          <FontAwesomeIcon icon={faMoonSolid} />
          Light Mode
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faMoon} />
          Dark Mode
        </>
      )}
    </ToggleContainer>
  );
};

export default ThemeToggle;
