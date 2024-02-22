import TableStructure from "./components/table-structure";
import Territory from "./mock-data/territory.json";
import Customers from "./mock-data/customers.json";
import CustomersLimit from "./mock-data/customer-limit.json";
import Orders from "./mock-data/orders.json";
import Products from "./mock-data/products.json";
import TextEditor from "./components/sql-text-editor";
import { useState } from "react";
import "./style.scss";
import { Button } from "@mui/material";
import PredefinedQueries from "./components/predefined-queries";
import { IQuery } from "./shared/models/TableStructure";
import { SVGs } from "./shared/images/images-list";
function App() {
  const [query, setQuery] = useState({} as IQuery | null);
  const [tableData, setTableData] = useState([] as any);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setQuery({
      query: event.target.value,
      index: 10, // some random number
    });
  }
  function handleAvailableQueries(value: IQuery) {
    setQuery(value);
  }
  const handleRunQuery = () => {
    switch (query?.index) {
      case 1:
        return setTableData(Customers);
      case 2:
        return setTableData(CustomersLimit);
      case 3:
        return setTableData(Products);
      case 4:
        return setTableData(Orders);
      case 5:
        return setTableData(Territory);
      default:
        return setTableData(Customers);
    }
  };
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__content__text-editor">
          <PredefinedQueries handleAvailableQueries={handleAvailableQueries} />
          <div className="container__content__text-editor--left">
            <div className="sql-title">SQL QUERY</div>
            <TextEditor content={query?.query} handleChange={handleChange} />
            <div className="container__content__text-editor--left--query-actions">
              <Button
                variant="outlined"
                color="success"
                disabled={!query?.query}
                onClick={handleRunQuery}
              >
                {
                  SVGs({ color: !query?.query ? "lightgray" : "green" })
                    .PlayButton
                }
                Run Query
              </Button>
              <Button
                variant="outlined"
                color="error"
                disabled={!query?.query}
                onClick={() =>
                  setQuery((prev: any) => ({
                    ...prev,
                    query: "",
                  }))
                }
              >
                {
                  SVGs({ color: !query?.query ? "lightgray" : "darkred" })
                    .ResetButton
                }
                Reset
              </Button>
            </div>
            <div className="container__content__text-editor--left--table-output">
              {tableData?.length && (
                <TableStructure
                  minWidth={650}
                  tableData={tableData}
                  heading="Output"
                />
              )}
            </div>
          </div>
          <div className="container__content__text-editor--right">
            <TableStructure minWidth={0} tableData={Territory} />
            <br />
            <TableStructure minWidth={0} tableData={Territory} />
            <br />
            <TableStructure minWidth={0} tableData={Territory} />
            <br />
          </div>
        </div>
        <div className="container__content__table-structure"></div>
      </div>
    </div>
  );
}

export default App;
