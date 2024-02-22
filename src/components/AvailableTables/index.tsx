import React, { Fragment, Suspense } from "react";
import { AvailableTable } from "../../shared/mocks/TableData";
import Spinner from "../Spinner";
const TableStructure = React.lazy(() => import("../table-structure"));
const AvailableTableList = () => {
  return (
    <>
      <h2>Available Tables</h2>
      {AvailableTable.map(({ table, index }) => {
        return (
          <Fragment key={index}>
            {index !== 2 ? (
              <Suspense fallback={<Spinner />}>
                <TableStructure minWidth={0} tableData={table} />
              </Suspense>
            ) : null}
            <br />
          </Fragment>
        );
      })}
    </>
  );
};

export default React.memo(AvailableTableList);
