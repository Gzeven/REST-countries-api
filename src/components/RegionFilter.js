import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FilterContainer = styled.div`
  width: 200px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  height: 48px;
  position: relative;
  select {
    appearance: none;
  }

  @media only screen and (min-width: 768px) {
    height: 56px;
  }
`;

const DropdownIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: ${(props) => props.theme.textColor};
  pointer-events: none; /* Prevent the icon from intercepting clicks */
`;

const FontAwesomeIconDub = styled(FontAwesomeIcon)`
  width: 9px;
`;

const FilterLabel = styled.label`
 position: absolute;
  left: -9999px;
`;

const FilterSelect = styled.select`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 0 1.5rem;
  background-color: ${(props) => props.theme.elementsColor};
  color: ${(props) => props.theme.textColor};
  font-size: 12px;

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const RegionFilter = ({ selectedRegion, onChange }) => {
  return (
    <FilterContainer>
    <FilterLabel htmlFor="regionFilter">Filter by Region</FilterLabel>
      <FilterSelect id="regionFilter" value={selectedRegion} onChange={onChange}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </FilterSelect>
      <DropdownIcon>
        <FontAwesomeIconDub icon={faChevronDown} />
      </DropdownIcon>
    </FilterContainer>
  );
};

export default RegionFilter;
