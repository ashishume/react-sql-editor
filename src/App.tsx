import TableStructure from "./components/table-structure";
import TextEditor from "./components/sql-text-editor";
import { useState } from "react";
import "./App.scss";
import PredefinedQueries from "./components/predefined-queries";
import { IQuery } from "./shared/models/TableStructure";
import AvailableTableList from "./components/AvailableTables";
import ActionButtons from "./components/ActionButtons";
import { AvailableTable } from "./shared/mocks/TableData";
function App() {
  const [query, setQuery] = useState("");
  const [tableData, setTableData] = useState([] as any);

  /**
   * on input field change change the value
   * @param event
   */
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setQuery(event.target.value);
  }

  /**
   * set the value of the predefined queries to the input field
   * @param value
   */
  function handleAvailableQueries(value: IQuery) {
    setQuery(value?.query);
  }

  /** run query with the mapped data */
  const handleRunQuery = () => {
    const filteredData = AvailableTable.filter((val) => val?.query === query);
    if (filteredData?.length) {
      setTableData(filteredData[0].table);
    } else {
      /** if it doesnt match with any of the predefined queries then send a random table */
      const randomIndex = Math.floor(Math.random() * AvailableTable.length);
      setTableData(AvailableTable[randomIndex].table);
    }
  };

  /** reset everything once reset is clicked */
  function handleReset() {
    setQuery("");
    setTableData([]);
  }
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__content__text-editor">
          <PredefinedQueries handleAvailableQueries={handleAvailableQueries} />
          <div className="container__content__text-editor--left">
            <div className="sql-title">SQL QUERY</div>

            {/* Text editor component */}
            <TextEditor content={query} handleChange={handleChange} />

            <div className="container__content__text-editor--left--query-actions">
              {/* Action buttons like run query or reset */}
              <ActionButtons
                query={query}
                handleRunQuery={handleRunQuery}
                handleReset={handleReset}
              />
            </div>
            <div className="container__content__text-editor--left--table-output">
              {/* generic table structure */}
              {tableData?.length ? (
                <TableStructure
                  minWidth={650}
                  tableData={tableData}
                  heading="Output"
                />
              ) : (
                <div>
                  {/* empty placeholder message */}
                  <h2 className="container__content__text-editor--left--table-output--info">
                    Ready to fill this space with your SQL genius? Let's see
                    those queries!
                  </h2>
                </div>
              )}
            </div>
          </div>
          <div className="container__content__text-editor--right">
            {/* list of tables available for query run */}
            <AvailableTableList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
