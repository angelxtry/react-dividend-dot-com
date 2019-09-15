import React, { Fragment } from "react";
import styled from "styled-components";

const StockList = ({ stock }) => {
  // console.log(
  //   "StockItem: ",
  //   stock.stockShortCode,
  //   stock.shares,
  //   stock.dividend
  // );
  return (
    <StockItem>
      <StockName>{stock.stockShortCode}</StockName>
      <Shares>{stock.shares}</Shares>
      <Dividend>{stock.dividend}</Dividend>
    </StockItem>
  );
};

const StockItemsComponent = ({ stockItems }) => {
  // console.log("StockItems: ", stockItems);
  return (
    <Fragment>
      <div>
        {stockItems.map((stock, index) => (
          <StockList key={index} stock={stock} />
        ))}
      </div>
    </Fragment>
  );
};

const StockItem = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 2fr;
  grid-template-areas: "stockShortCode shares dividend";
  grid-gap: 2px;
  font-family: ${props => props.theme.specialFont};
  font-size: 12px;
  padding-bottom: 10px;
`;

const StockName = styled.div`
  grid-area: stockShortCode;
  width: 50px;
  /* font-family: ${props => props.theme.specialFont};
  font-size: 6px; */
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
