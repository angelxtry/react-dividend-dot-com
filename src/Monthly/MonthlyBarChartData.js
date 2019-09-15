import moment from "moment";
import { log, go, range, filter, map, reduce, add, isUndefined } from "fxjs2";

const MonthlyBarChartData = dividendData => {
  const today = moment().format("YYYY-MM");
  const afterAYear = moment()
    .add(12, "months")
    .format("YYYY-MM");
  const monthOfAYearFromNow = go(
    range(1, 13),
    map(n => moment().add(n, "months").format("YYYY-MM"))
  );
  const dividendOfAYearFromNow = go(
    dividendData,
    map(s => ({ date: s.date.substring(0, 7), amount: s.amount * s.shares })),
    filter(s => s.date >= today),
    filter(s => s.date <= afterAYear)
  );
  // log(dividendOfAYearFromNow);

  // 0: {date: "2019-11", amount: 7.3}
  // 1: {date: "2019-09", amount: 2.2}
  // 2: {date: "2019-10", amount: 2.2}
  // 3: {date: "2019-11", amount: 9.200000000000001}
  // 4: {date: "2019-09", amount: 8}
  // 5: {date: "2019-11", amount: 8}
  // 6: {date: "2020-03", amount: 8}
  // 7: {date: "2020-06", amount: 8}
  const addMonthlyDividend = month =>
    go(
      dividendOfAYearFromNow,
      filter(d => d.date === month),
      map(d => d.amount),
      reduce(add)
    );

  const monthlyDividendSum = go(
    monthOfAYearFromNow,
    map(m => addMonthlyDividend(m)),
    map(a => (isUndefined(a) ? 0 : a.toFixed(4)))
  );

  log("monthlyDividendSum: ", monthlyDividendSum);

  const labels = monthOfAYearFromNow;
  const datasets = [
    {
      data: monthlyDividendSum
    }
  ];
  const options = {
    maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  return { labels, datasets, options };
};

export default MonthlyBarChartData;
