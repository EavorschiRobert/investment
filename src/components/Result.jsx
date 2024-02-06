import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({ userInput }) {
    const annualData = calculateInvestmentResults(userInput);
    const initialInvestment =
        annualData[0].valueEndOfYear -
        annualData[0].interest -
        annualData[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {annualData &&
                    annualData.map((item, index) => {
                        const totalInterest =
                            item.valueEndOfYear -
                            item.annualInvestment * item.year -
                            initialInvestment;
                        const totalAmountInvested = item.valueEndOfYear - totalInterest;
                        return (
                            <tr>
                                <td>{item.year}</td>
                                <td>{formatter.format(item.valueEndOfYear)}</td>
                                <td>{formatter.format(item.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>
                                    {formatter.format(totalAmountInvested
                                      )}
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default Result;
