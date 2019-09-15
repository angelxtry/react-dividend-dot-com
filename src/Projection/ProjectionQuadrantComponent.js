import React, { Fragment } from "react";
import styled from "styled-components";

import moment from "moment";
import { sortBy, go, take, filter, map, reduce, add, L } from "fxjs2";
import { initialDivdendDetailData } from "../data";

const ProjectionQuadrantComponent = () => {
  const initialData = initialDivdendDetailData;
  if (!Array.isArray(initialData) || initialData.length === 0) {
    return (
      <ProjectionQuadrant>
        {` `}
      </ProjectionQuadrant>
    );
  }

  const today = moment().format("YYYY-MM-DD");
  const afterNMonth = n =>
    moment()
      .add(n, "months")
      .format("YYYY-MM-DD");
  const after3Month = afterNMonth(3);
  const after6Month = afterNMonth(6);
  const afterAYear = afterNMonth(12);

  const nextDividendStock = go(
    initialData,
    sortBy(s => s.date),
    L.filter(s => s.date > today),
    take(1)
  )[0];
  // console.log(nextDividendStock);

  const nextDividendIncome = nextDividendStock ? nextDividendStock.amount : 0;
  const sumOfNMonthsDividend = months =>
    go(
      initialData,
      sortBy(s => s.date),
      filter(s => s.date >= today),
      filter(s => s.date <= months),
      map(s => s.amount * s.shares),
      reduce(add)
    );

  const after3MonthDividendIncome = sumOfNMonthsDividend(after3Month).toFixed(
    2
  );
  const after6MonthDividendIncome = sumOfNMonthsDividend(after6Month).toFixed(
    2
  );
  const afterAYearDividendIncome = sumOfNMonthsDividend(afterAYear).toFixed(2);

  return (
    <Fragment>
      <ProjectionQuadrant>
        <Next>
          <SubTitle>
            Next Deposit: {` `}
            {nextDividendStock.stockShortCode}
          </SubTitle>
          <Period>{nextDividendStock.date}</Period>
          <Amount>${nextDividendIncome}</Amount>
        </Next>
        <Month3>
          <SubTitle>3 Mo. Dividend Income</SubTitle>
          <Period>
            {today} - {after3Month}
          </Period>
          <Amount>${after3MonthDividendIncome}</Amount>
        </Month3>
        <Month6>
          <SubTitle>6 Mo. Dividend Income</SubTitle>
          <Period>
            {today} - {after6Month}
          </Period>
          <Amount>${after6MonthDividendIncome}</Amount>
        </Month6>
        <Month12>
          <SubTitle>12 Mo. Dividend Income</SubTitle>
          <Period>
            {today} - {afterAYear}
          </Period>
          <Amount>${afterAYearDividendIncome}</Amount>
        </Month12>
      </ProjectionQuadrant>
    </Fragment>
  );
};

const ProjectionQuadrant = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "next mon3"
    "mon6 mon12";
  border: 1px solid #f1f1f1;
  margin: 0;
  padding: 9px 0 5px 12px;
`;

const Next = styled.div`
  grid-area: next;
`;

const Month3 = styled.div`
  grid-area: mon3;
`;

const Month6 = styled.div`
  grid-area: mon6;
`;
const Month12 = styled.div`
  grid-area: mon12;
`;

const SubTitle = styled.div`
  font-family: ${props => props.theme.specialFont};
  font-weight: bold;
  font-size: 8px;
  color: #777777;
`;

const Period = styled.div`
  font-family: ${props => props.theme.specialFont};
  font-size: 8px;
  color: #777777;
`;

const Amount = styled.div`
  font-family: ${props => props.theme.baseFont};
  font-size: 28px;
`;
export default ProjectionQuadrantComponent;
