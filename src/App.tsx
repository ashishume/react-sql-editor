import TableStructure from "./components/table-structure";
import Products from "./mock-data/products.json";
import Orders from "./mock-data/orders.json";
import Territory from "./mock-data/territory.json";
import TextEditor from "./components/sql-text-editor";
import { useState } from "react";
import { Queries } from "./shared/mocks/predefined-queries";
import "./style.scss";
import playBtn from "./assets/play-btn.svg";
import { Button } from "@mui/material";
function App() {
  const [query, setQuery] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setQuery(event.target.value);
  }
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__content__text-editor">
          <div className="container__content__text-editor--left">
            <div className="sql-title">SQL QUERY</div>
            <TextEditor content={query} handleChange={handleChange} />
            <div className="container__content__text-editor--left--query-actions">
              <Button variant="outlined" color="success">
                <img src={playBtn} /> Run Query
              </Button>
              <Button variant="outlined" color="error">
                Reset
              </Button>
            </div>
            <div className="container__content__text-editor--left--table-output">
              <TableStructure
                minWidth={650}
                tableData={Territory}
                heading="Output"
              />
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
