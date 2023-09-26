// components/Layout.js
import React from 'react';
import Header from './Header';
import { Nunito_Sans } from '@next/font/google';
import styled from 'styled-components';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
});

const PageContainer = styled.div`
  min-height: 100vh;
  transition: all 0.2s ease-in-out;
`;

const Layout = ({ darkMode, toggleTheme, children }) => {
  return (
    <PageContainer className={nunitoSans.className}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      {children}
    </PageContainer>
  );
};

export default Layout;
