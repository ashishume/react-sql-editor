import TableStructure from "./components/table-structure";
import Territory from "./mock-data/territory.json";
import TextEditor from "./components/sql-text-editor";
import { useState } from "react";
import "./style.scss";
import playBtn from "./assets/play-btn.svg";
import { Button } from "@mui/material";
import PredefinedQueries from "./components/predefined-queries";
import { IQuery } from "./shared/models/TableStructure";
import { SVGs } from "./shared/images/images-list";
function App() {
  const [query, setQuery] = useState("");
  const [isSubmitted, setSubmission] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setQuery(event.target.value);
  }
  function handleAvailableQueries(value: IQuery) {
    setQuery(value.query);
  }
  function handleRunQuery() {
    setSubmission(true);
  }
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__content__text-editor">
          <PredefinedQueries handleAvailableQueries={handleAvailableQueries} />
          <div className="container__content__text-editor--left">
            <div className="sql-title">SQL QUERY</div>
            <TextEditor content={query} handleChange={handleChange} />
            <div className="container__content__text-editor--left--query-actions">
              <Button
                variant="outlined"
                color="success"
                disabled={!query}
                onClick={handleRunQuery}
              >
                {SVGs({ color: !query ? "lightgray" : "green" }).PlayButton}
                Run Query
              </Button>
              <Button
                variant="outlined"
                color="error"
                disabled={!query}
                onClick={() => setQuery("")}
              >
                {SVGs({ color: !query ? "lightgray" : "darkred" }).ResetButton}
                Reset
              </Button>
            </div>
            <div className="container__content__text-editor--left--table-output">
              {isSubmitted && (
                <TableStructure
                  minWidth={650}
                  tableData={Territory}
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
