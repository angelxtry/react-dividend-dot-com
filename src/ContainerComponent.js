import React from "react";
import styled from "styled-components";

import HeaderComponent from "./HeaderComponent";
import Holdings from "./HoldingsComponent";
import Projection from "./ProjectionComponent";
import Monthly from "./MonthlyComponent";

const ContainerComponent = () => {
  return (
    <Container>
      <HeaderComponent />
      <Holdings />
      <Projection />
      <Monthly />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr;
  grid-template-rows: 50px 100px auto;
  grid-template-areas:
    "... header   header     header     header ..."
    "... holdings projection projection projection..."
    "... holdings monthly    monthly    monthly...";
  grid-gap: 5px;
`;

export default ContainerComponent;
