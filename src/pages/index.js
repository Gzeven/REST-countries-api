import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../utils/api';
import styled from 'styled-components';
import CountryCard from '../components/CountryCard';
import CountrySearch from '../components/CountrySearch';
import RegionFilter from '../components/RegionFilter';
import LoadingPage from '@/components/LoadingPage';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Set the minimum height to fill the viewport */
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  transition: background-color 0.7s ease, color 0.3s ease;
  padding: 0 1rem;
  @media only screen and (min-width: 768px) {
    padding: 0 5rem;
  }
`;

const SearchAndFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  gap: 2rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 0;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  justify-items: center;
  gap: 2rem;
  min-height: 100vh;
`;

const Message = styled.p`
  text-align: center;
  margin: 2rem 0;
`;

const HomePage = ({ countries }) => {
  const [loading, setLoading] = useState(true);
  // No need to fetch countries here, they are already passed as a prop
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion === '' || country.region === selectedRegion)
  );

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    // Show the loading page while the app is loading
    return <LoadingPage />;
  }

  return (
    <HomePageContainer>
      <SearchAndFilterContainer>
        <CountrySearch
          searchTerm={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <RegionFilter
          selectedRegion={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        />
      </SearchAndFilterContainer>
      {filteredCountries.length > 0 ? (
        <CardGrid>
          {filteredCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </CardGrid>
      ) : (
        <Message>No countries found with the current search criteria.</Message>
      )}
    </HomePageContainer>
  );
};

export async function getStaticProps() {
  const countries = await fetchCountries();
  return {
    props: { countries },
  };
}

export default HomePage;
