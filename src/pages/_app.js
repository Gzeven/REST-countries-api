// pages/_app.js
import React, { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import '../styles/globals.css'; // Your global styles here...

const lightTheme = {
  backgroundColor: 'hsl(0, 0%, 98%)',
  textColor: 'hsl(200, 15%, 8%)',
  elementsColor: 'hsl(0, 0%, 100%)',
  inputColor: 'hsl(0, 0%, 52%)',
};

const darkTheme = {
  backgroundColor: 'hsl(207, 26%, 17%)',
  textColor: 'hsl(0, 0%, 100%)',
  elementsColor: 'hsl(209, 23%, 22%)',
  inputColor: 'hsl(0, 0%, 100%)',
};

export const ThemeContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <>
      <Head>
        <title>
          Frontend Mentor - REST Countries API with color theme switcher
        </title>
      </Head>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <ThemeContext.Provider value={darkMode}>
          <Layout darkMode={darkMode} toggleTheme={toggleTheme}>
            <Component {...pageProps} />
          </Layout>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
