import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const ChartDrawing = ({ type, datasets, labels, options }) => {
  // console.log("ChartDrawing: ", datasets, labels);
  Chart.defaults.global.legend.display = false;
  const chartRef = useRef();

  useEffect(() => {
    const drawChart = () => {
      const config = {
        type: type,
        data: {
          datasets: datasets,
          labels: labels
        },
        options: options
      };
      const currentChartRef = chartRef.current.getContext("2d");
      new Chart(currentChartRef, config);
    };
    drawChart();
  }, [type, datasets, labels, options]);

  return <canvas ref={chartRef} />;
};

export default ChartDrawing;
