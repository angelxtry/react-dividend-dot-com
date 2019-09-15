import React, { Fragment } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import theme from "./theme";
import HeaderComponent from "./Header/HeaderComponent";
import Holdings from "./Holdings/HoldingsComponent";
import Projection from "./Projection/ProjectionComponent";
import Monthly from "./Monthly/MonthlyComponent";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F1F1F1;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Container>
          <HeaderComponent />
          <Holdings />
          <Projection />
          <Monthly />
        </Container>
      </Fragment>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 1fr;
  grid-template-rows: 50px 200px auto;
  grid-template-areas:
    "... header   header     ..."
    "... holdings projection ..."
    "... holdings monthly    ...";
  grid-gap: 10px;
`;

export default App;
