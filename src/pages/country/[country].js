import React from 'react';
import { useRouter } from 'next/router';
import CountryDetails from '../../components/CountryDetails';
import { fetchCountries } from '../../utils/api';

const CountryPage = ({ country, borderCountries }) => {
  const router = useRouter();

  // If the page is not yet generated or data is not available, show a loading message
  if (router.isFallback || !country || !borderCountries) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CountryDetails country={country} borderCountries={borderCountries} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const countries = await fetchCountries();
  const country = countries.find((c) => c.name.common === params.country);

  // Get the full names of the border countries
  const borderCountries =
    country?.borders?.map(
      (border) => countries.find((c) => c.cca3 === border)?.name.common
    ) || [];

  return { props: { country, borderCountries } };
}

export default CountryPage;
