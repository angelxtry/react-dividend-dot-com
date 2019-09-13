import React, { Fragment } from "react";
import styled from "styled-components";

const StockItem = ({ stock }) => {
  console.log("StockItem: ", stock.stockName, stock.shares, stock.dividend);
  return (
    <StockItems>
      <StockName>{stock.stockName}</StockName>
      <Shares>{stock.shares}</Shares>
      <Dividend>{stock.dividend}</Dividend>
    </StockItems>
  );
};

const StockItemsComponent = ({ stockItems }) => {
  console.log("StockItems: ", stockItems);
  return (
    <Fragment>
      <div>
        {stockItems.map((stock, index) => (
          <StockItem key={index} stock={stock} />
        ))}
      </div>
    </Fragment>
  );
};

const StockItems = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: "stockName shares dividend";
  grid-gap: 1px;
`;

const StockName = styled.div`
  grid-area: stockName;
  width: 50px;
`;

const Shares = styled.div`
  grid-area: shares;
  width: 30px;
`;

const Dividend = styled.div`
  grid-area: dividend;
  width: 30px;
`;

export default StockItemsComponent;
