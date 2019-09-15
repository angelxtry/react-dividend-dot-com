import React from "react";
import styled from "styled-components";

import MonthlyBarChartData from "./MonthlyBarChartData";
import ChartDrawing from "../Chart/ChartDrawing";
import { initialDivdendDetailData } from "../data";

const MonthlyComponent = () => {
  const { labels, datasets, options } = MonthlyBarChartData(
    initialDivdendDetailData
  );
  // console.log("MonthlyComponent - labels", labels);
  return (
    <Monthly>
      <MonthlyTitle>Monthly Dividend Income</MonthlyTitle>
      <ChartDrawing
        type="bar"
        labels={labels}
        datasets={datasets}
        options={options}
      />
    </Monthly>
  );
};

const Monthly = styled.div`
  grid-area: monthly;
  background-color: ${props => props.theme.baseBackgroundColor};
  font-size: ${props => props.theme.h4TitleFontSize};
`;

const MonthlyTitle = styled.h4`
  font-family: ${props => props.theme.baseFont};
  font-weight: bold;
  font-size: ${props => props.theme.h4TitleFontSize};
  color: #333;
  border: 1px solid #f1f1f1;
  margin: 0;
  padding: 10px 0 10px 12px;
`;

export default MonthlyComponent;
