import React, { Fragment } from "react";
import styled from "styled-components";

import ContainerComponent from "./ContainerComponent";

function App() {
  return (
    <Fragment>
      <ContainerComponent />
      {/* <Container>
        <Header>Dividend Assistant</Header>
        <Holdings>Your Holdings</Holdings>
        <Projection>Projected Dividend Income</Projection>
        <Monthly>Monthly Dividend Income</Monthly>
      </Container> */}
    </Fragment>
  );
}

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 3fr 1fr;
//   grid-template-rows: 50px 100px auto;
//   grid-template-areas:
//     "... header   header     header     header ..."
//     "... holdings projection projection projection..."
//     "... holdings monthly    monthly    monthly...";
//   grid-gap: 5px;
// `;
// const Header = styled.div`
//   grid-area: header;
// `;
// const Holdings = styled.div`
//   grid-area: holdings;
// `;
// const Projection = styled.div`
//   grid-area: projection;
// `;
// const Monthly = styled.div`
//   grid-area: monthly;
// `;

export default App;
