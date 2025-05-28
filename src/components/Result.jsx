import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ formValues }) {
  const data = calculateInvestmentResults(formValues);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => {
          const totalInterest =
            row.valueEndOfYear -
            row.annualInvestment * row.year -
            initialInvestment;
          const totalAmountInvested = row.valueEndOfYear - totalInterest;
          return (
            <tr key={rowIndex}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
