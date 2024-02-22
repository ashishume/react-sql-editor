import { Suspense, lazy, useState } from "react";
import "./App.scss";
import { ITableQueryData } from "./shared/models/TableStructure";
import { AvailableTable } from "./shared/mocks/TableData";
import Spinner from "./components/Spinner";
import ActionButtons from "./components/ActionButtons";
import TextEditor from "./components/sql-text-editor";
const TableStructure = lazy(() => import("./components/table-structure"));
const AvailableTableList = lazy(() => import("./components/AvailableTables"));
const PredefinedQueries = lazy(() => import("./components/predefined-queries"));

function App() {
  const [query, setQuery] = useState("");
  const [tableData, setTableData] = useState([] as any);
  const [recentlyUsedQueries, setRecentlyUsedQueries] = useState([] as any);

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
  function handleAvailableQueries(query: string) {
    setQuery(query);
  }

  /** run query with the mapped data */
  const handleRunQuery = () => {
    /** find the predefined query */
    const filteredData = AvailableTable.filter((val) => val?.query === query);
    let result: ITableQueryData;
    /** user input query */
    let inputQuery = "";
    if (filteredData?.length) {
      result = filteredData[0];
      inputQuery = filteredData[0].query;
    } else {
      /** if it doesnt match with any of the predefined queries then send a random table */
      const randomIndex = Math.floor(Math.random() * AvailableTable.length);
      result = AvailableTable[randomIndex];
      inputQuery = query;
    }

    /** update the user input query */
    setRecentlyUsedQueries((prev: string[]) => {
      if (!prev.some((item) => item === inputQuery)) {
        // If it doesn't exist, add the new query
        return [...prev, inputQuery];
      }
      // If it already exists, return the previous state unchanged
      return prev;
    });

    /** update the table data */
    if (result) setTableData(result?.table);
  };

  /** reset everything once reset is clicked */
  function handleReset() {
    setQuery("");
    setTableData([]);
  }
  return (
    // TODO: make a json to csv download button
    <div className="container">
      <div className="container__content">
        <div className="container__content__text-editor">
          {/* predefined queries */}
          <Suspense fallback={<Spinner />}>
            <PredefinedQueries
              recentlyUsedQueries={recentlyUsedQueries}
              handleAvailableQueries={handleAvailableQueries}
            />
          </Suspense>
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
                <Suspense fallback={<Spinner />}>
                  <TableStructure
                    minWidth={650}
                    tableData={tableData}
                    heading="Output"
                  />
                </Suspense>
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
            <Suspense fallback={<Spinner />}>
              <AvailableTableList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
