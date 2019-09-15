import React, { useState } from "react";
import styled from "styled-components";

import StockItemsComponent from "./StockItemsComponent";
import StockAddConponent from "./StockAddComponent";
import { initialHoldingsData } from "../data";

const HoldingsComponent = () => {
  const [stockList, setStockList] = useState(initialHoldingsData);

  return (
    <Holdings>
      <HoldingsContainer>
        <HoldingsTitle>Your Holdings</HoldingsTitle>
        <StockItems>
          <StockItemsComponent stockItems={stockList} />
        </StockItems>
        <StockAddConponent stockList={stockList} setStockList={setStockList} />
      </HoldingsContainer>
    </Holdings>
  );
};

const Holdings = styled.div`
  grid-area: holdings;
  background-color: ${props => props.theme.baseBackgroundColor};
  /* padding: 10px; */
`;

const HoldingsContainer = styled.div`
  display: grid;
  grid-template-rows: 30px auto;
  grid-template-areas:
    "title"
    "stockItems";
  border: 1px solid #F1F1F1;
`;

const HoldingsTitle = styled.h4`
  grid-area: title;
  font-family: ${props => props.theme.baseFont};
  font-weight: bold;
  font-size: ${props => props.theme.h4TitleFontSize};
  color: #333;
  border: 1px solid #F1F1F1;
  margin: 0;
  padding: 10px 0 0 12px;
`;

const StockItems = styled.div`
  grid-area: stockItems;
  margin-bottom: 20px;
  border: 1px solid #F1F1F1;
  margin: 0;
  padding: 10px 0 0 12px;
`;

export default HoldingsComponent;
