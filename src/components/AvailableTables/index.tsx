import React, { Fragment } from "react";
import { AvailableTable } from "../../shared/mocks/TableData";
import TableStructure from "../table-structure";

const AvailableTableList = () => {
  return (
    <>
      <h2>Available Tables</h2>
      {AvailableTable.map(({ table, label }) => {
        return (
          <Fragment key={label}>
            <TableStructure minWidth={0} tableData={table} />
            <br />
          </Fragment>
        );
      })}
    </>
  );
};

export default AvailableTableList;
