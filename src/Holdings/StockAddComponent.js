import React from "react";
import styled from "styled-components";

import useInput from "../CustomHooks/useInput";

const StockAddComponent = ({ stockList, setStockList }) => {
  const [stockShortCode, setStockName, onChangeStockName] = useInput("");
  const [shares, setShares, onChangeShares] = useInput("");
  const [dividend, setDividend, onChangeDividend] = useInput("");

  const addStock = event => {
    const newStock = {
      stockShortCode: stockShortCode,
      shares: shares,
      dividend: dividend
    };
    setStockList([...stockList, newStock]);
    setStockName("");
    setShares("");
    setDividend("");
    event.preventDefault();
  };

  return (
    <form onSubmit={addStock}>
      <FormStyle>
        <StockName value={stockShortCode} onChange={onChangeStockName} />
        <Shares value={shares} onChange={onChangeShares} />
        <Dividend value={dividend} onChange={onChangeDividend} />
      </FormStyle>
      <Button type="submit">Add More Holdings</Button>
    </form>
  );
};

const FormStyle = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: "stockShortCode shares dividend";
  grid-gap: 1px;
  margin: 0;
  padding: 10px 0 0 12px;
  /* border: 1px solid #F1F1F1; */
`;

const Input = styled.input.attrs({
  required: true
})`
  border-radius: 5px;
`;

const StockName = styled(Input)`
  grid-area: stockShortCode;
  width: 50px;
`;

const Shares = styled(Input)`
  grid-area: shares;
  width: 30px;
`;

const Dividend = styled(Input)`
  grid-area: dividend;
  width: 30px;
`;

const Button = styled.button`
  padding: 5px;
  font-weight: 600;
  /* color: white; */
  border: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

export default StockAddComponent;