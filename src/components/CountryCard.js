// components/CountryCard.js
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const CardContainer = styled.div`
  width: 264px;
  height: 336px;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  background-color: ${(props) => props.theme.elementsColor};
  color: ${(props) => props.theme.textColor};
  &:hover {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.elementsColor};
    transform: scale(1.05);
  }
`;

const FlagContainer = styled.div`
  height: 160px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlagImage = styled.img`
  max-height: 160px;
  object-fit: contain;
`;

const CountryData = styled.div`
  padding: 1.5rem;
`;

const CountryName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CountryInfo = styled.p`
  font-size: 14px;
`;

const CountryCard = ({ country }) => {
  const { name, population, region, capital, flags } = country;

  return (
    <CardContainer>
      <Link href={`/country/${encodeURIComponent(name.common)}`}>
        <FlagContainer>
          <FlagImage src={flags.png} alt={`${name.common} Flag`} />
        </FlagContainer>
        <CountryData>
          <CountryName>{name.common}</CountryName>
          <CountryInfo>Population: {population.toLocaleString()}</CountryInfo>
          <CountryInfo>Region: {region}</CountryInfo>
          <CountryInfo>Capital: {capital}</CountryInfo>
        </CountryData>
      </Link>
    </CardContainer>
  );
};

export default CountryCard;
