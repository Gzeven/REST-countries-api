import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 480px;
  height: 48px;
  font-size: 12px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.elementsColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  
  @media only screen and (min-width: 768px) {
   height: 56px;
   font-size: 14px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  color: inherit;
  padding-left: 1.625rem;
  &::placeholder {
    color: ${(props) => props.theme.inputColor};
  }
   @media only screen and (min-width: 768px) {
   padding-left: 1.5rem;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  margin-left: 2rem;
  color: ${(props) => props.theme.inputColor};

  @media only screen and (min-width: 768px) {
  }
`;

const CountrySearch = ({ searchTerm, onChange }) => {
  return (
    <SearchInputContainer>
      <SearchIcon icon={faSearch} />
      <SearchInput
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={onChange}
      />
    </SearchInputContainer>
  );
};

export default CountrySearch;
