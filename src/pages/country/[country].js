// import React from 'react';
// import { useRouter } from 'next/router';
// import CountryDetails from '../../components/CountryDetails';
// import { fetchCountries } from '../../utils/api';

// const CountryPage = ({ country, borderCountries }) => {
//   const router = useRouter();

//   // If the page is not yet generated or data is not available, show a loading message
//   if (router.isFallback || !country || !borderCountries) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <CountryDetails country={country} borderCountries={borderCountries} />
//     </div>
//   );
// };

// export async function getServerSideProps({ params }) {
//   const countries = await fetchCountries();
//   const country = countries.find((c) => c.name.common === params.country);

//   // Get the full names of the border countries
//   const borderCountries =
//     country?.borders?.map(
//       (border) => countries.find((c) => c.cca3 === border)?.name.common
//     ) || [];

//   return { props: { country, borderCountries } };
// }

// export default CountryPage;

// pages/country/[country].js

import { fetchCountries } from '../../utils/api';
import CountryDetails from '../../components/CountryDetails';

const CountryPage = ({ country, borderCountries }) => {
  // Render loading state if data is not available
  if (!country || !borderCountries) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CountryDetails country={country} borderCountries={borderCountries} />
    </div>
  );
};

export async function getStaticPaths() {
  const countries = await fetchCountries();

  // Generate paths for all countries
  const paths = countries.map((country) => ({
    params: { country: country.name.common },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
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
