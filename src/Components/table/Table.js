import { useState, useEffect, memo } from "react";
import TableStyled from "./Table.styled";

const Table = () => {
  const [tableData, setTableData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw Error("Failed to get table data");
      })
      .then((data) => {
        if (data.Note) {
          setErrorMessage(data.Note);
        } else {
          setTableData(data["Time Series (5min)"]);
        }
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  return (
    <TableStyled>
      <table className="table">
        <thead>
          <tr>
            <th>DateTime</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        {errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <tbody>
            {Object.entries(tableData).map((dateTime, index) => {
              const [dateAndTime, obj] = dateTime;
              return (
                <tr key={index}>
                  <td>{dateAndTime}</td>
                  <td>{obj["1. open"]}</td>
                  <td>{obj["2. high"]}</td>
                  <td>{obj["3. low"]}</td>
                  <td>{obj["4. close"]}</td>
                  <td>{obj["5. volume"]}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </TableStyled>
  );
};

export default memo(Table);
