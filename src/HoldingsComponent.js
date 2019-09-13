import React, { useState } from "react";
import styled from "styled-components";

import StockItemsComponent from "./StockItemsComponent";
import StockAddConponent from "./StockAddComponent";

const initialData = [
  {
    stockName: "AAPL",
    shares: 10,
    dividend: 0.5
  },
  {
    stockName: "GS",
    shares: 10,
    dividend: 0.2
  },
  {
    stockName: "SBUX",
    shares: 10,
    dividend: 0.45
  }
];
const HoldingsComponent = () => {
  const [stockList, setStockList] = useState(initialData);

  return (
    <Holdings>
      <HoldingsTitle>Your Holdings</HoldingsTitle>
      <StockItems>
        <StockItemsComponent stockItems={stockList} />
      </StockItems>
      <StockAddConponent stockList={stockList} setStockList={setStockList} />
    </Holdings>
  );
};

const Holdings = styled.div`
  grid-area: holdings;
`;

const HoldingsTitle = styled.h3`
  grid-area: holdingsTitle;
`;

const StockItems = styled.div`
  grid-area: stockItems;
  margin-bottom: 20px;
`;


export default HoldingsComponent;
