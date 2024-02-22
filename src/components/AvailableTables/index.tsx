import React, { Fragment } from "react";
import { AvailableTable } from "../../shared/mocks/TableData";
import TableStructure from "../table-structure";

const AvailableTableList = () => {
  return (
    <>
      <h2>Available Tables</h2>
      {AvailableTable.map(({ table, index }) => {
        return (
          <Fragment key={index}>
            {index !== 2 ? (
              <TableStructure minWidth={0} tableData={table} />
            ) : null}
            <br />
          </Fragment>
        );
      })}
    </>
  );
};

export default React.memo(AvailableTableList);
