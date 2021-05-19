import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

const Container = styled.main`
  min-height: 100vh;
`;

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <GlobalStyle />
      <Container>
        {children}
      </Container>
    </>
  );
};

export default Layout;
