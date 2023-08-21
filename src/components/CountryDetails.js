import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DetailsContainer = styled.div`
  padding: 2.5rem 1.75rem;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  transition: background-color 0.7s ease, color 0.3s ease;
  flex-direction: column;
  flex-grow: 1; /* Take up all available vertical space */
  min-height: 100vh;
  @media only screen and (min-width: 768px) {
    padding: 5rem;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  width: 104px;
  height: 32px;
  background-color: ${(props) => props.theme.elementsColor};
  border-radius: 6px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  /* transition: all 0.2s ease-in-out; */
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.elementsColor};
  }
  @media only screen and (min-width: 768px) {
    width: 136px;
    height: 40px;
  }
`;
const FlagImage = styled.img`
  flex: 1;
  border-radius: 5.71755px;
  
  object-fit: contain;

   @media only screen and (min-width: 768px) {
    border-radius: 10.0057px;  
`;

const CountryName = styled.h1`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 800;
  gap: 2.5rem;
  margin-bottom: 1.5rem;

  
  @media only screen and (min-width: 768px) {
   font-size: 32px;
`;

const CountryNameImage = styled.img`
  height: 40px;
   @media only screen and (min-width: 768px) {
   height: 50px;
`;

const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.75rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 5rem;
  }

  @media only screen and (min-width: 1200px) {
    gap: 9rem;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CountryDetailsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    /* flex-direction: row; */
  }

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

const CountryDetailsItem = styled.div`
  font-size: 14px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const DetailsLabel = styled.span`
  font-weight: 800;
  margin-right: 0.5rem;
`;

const DetailsValue = styled.span`
  font-size: 14px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const BorderingCountries = styled.div`
  margin-top: 2rem;
  @media only screen and (min-width: 1200px) {
    margin-top: 4.25rem;
  }
`;

const BorderingCountriesLabel = styled.span`
  margin-right: 1rem;
  font-size: 16px;
  font-weight: 600;
  display: block;

  @media only screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const BorderingCountryLink = styled.a`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  min-width: 96px;
  text-align: center;
  padding: 5px 0;
  background-color: ${(props) => props.theme.elementsColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.elementsColor};
  }
`;

const CountryDetails = ({ country, borderCountries }) => {
  const {
    name,
    population,
    region,
    subregion,
    capital,
    flags,
    tld,
    currencies,
    languages,
    coatOfArms,
  } = country;

  const formattedTld = tld ? tld.join(', ') : 'N/A';

  const nativeNames = name.nativeName;

  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <DetailsContainer>
      <BackButton onClick={handleGoBack}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ marginRight: '0.75rem' }}
        />
        Back
      </BackButton>
      <CountryContainer>
        <FlagImage src={flags.png} alt={`${name.common} Flag`} />

        <ContentContainer>
          <CountryName>
            {name.common}{' '}
            {coatOfArms.png && (
              <CountryNameImage
                src={coatOfArms.png}
                alt={`${name.common} Coat of Arms`}
              />
            )}
          </CountryName>
          <CountryDetailsContainer>
            <div>
              <CountryDetailsItem>
                {nativeNames && Object.keys(nativeNames).length > 0 && (
                  <CountryDetailsItem>
                    <DetailsLabel>Native Name:</DetailsLabel>
                    <DetailsValue>
                      {Object.entries(nativeNames).map(
                        ([langCode, langName], index) => (
                          <span key={langCode}>
                            {langName.common} ({langCode})
                            {index < Object.keys(nativeNames).length - 1 &&
                              ', '}
                          </span>
                        )
                      )}
                    </DetailsValue>
                  </CountryDetailsItem>
                )}
              </CountryDetailsItem>
              <CountryDetailsItem>
                <DetailsLabel>Population:</DetailsLabel>
                <DetailsValue>{population.toLocaleString()}</DetailsValue>
              </CountryDetailsItem>
              <CountryDetailsItem>
                <DetailsLabel>Region:</DetailsLabel>
                <DetailsValue>{region}</DetailsValue>
              </CountryDetailsItem>
              <CountryDetailsItem>
                <DetailsLabel>Subregion:</DetailsLabel>
                <DetailsValue>{subregion}</DetailsValue>
              </CountryDetailsItem>
              <CountryDetailsItem>
                <DetailsLabel>Capital:</DetailsLabel>
                <DetailsValue>{capital}</DetailsValue>
              </CountryDetailsItem>
            </div>

            <div>
              <CountryDetailsItem>
                <DetailsLabel>Top Level Domain:</DetailsLabel>
                <DetailsValue>{formattedTld}</DetailsValue>
              </CountryDetailsItem>
              <CountryDetailsItem>
                <DetailsLabel>Currencies:</DetailsLabel>
                <DetailsValue>
                  {Object.values(currencies)
                    .map((currency) => currency.name)
                    .join(', ')}
                </DetailsValue>
              </CountryDetailsItem>
              <CountryDetailsItem>
                <DetailsLabel>Languages:</DetailsLabel>
                <DetailsValue>
                  {Object.values(languages).join(', ')}
                </DetailsValue>
              </CountryDetailsItem>
            </div>
          </CountryDetailsContainer>
          {/* Displaying bordering countries */}
          {borderCountries.length > 0 && (
            <BorderingCountries>
              <BorderingCountriesLabel>
                Border Countries:
              </BorderingCountriesLabel>
              {borderCountries.map((borderCountry) => (
                <Link
                  key={borderCountry}
                  href={`/country/${encodeURIComponent(borderCountry)}`}
                  legacyBehavior
                >
                  <BorderingCountryLink>{borderCountry}</BorderingCountryLink>
                </Link>
              ))}
            </BorderingCountries>
          )}
        </ContentContainer>
      </CountryContainer>
    </DetailsContainer>
  );
};

export default CountryDetails;
