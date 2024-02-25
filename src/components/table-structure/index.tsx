import React from "react";
import style from "./style.module.scss";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import DownloadCSV from "../DownloadCSV";
const TableStructure = ({
  tableData,
  heading,
  minWidth,
  showDownloadCSV = false,
}: {
  tableData: any;
  heading?: string;
  minWidth: number;
  showDownloadCSV?: boolean;
}) => {
  const header = Object.keys(tableData[0]);
  return (
    <>
      <div className={style["container"]}>
        <div className={style["header-container"]}>
          {heading && <div className={style["heading"]}>{heading}</div>}
          {showDownloadCSV ? (
            <DownloadCSV data={tableData} headers={Object.keys(tableData[0])} />
          ) : null}
        </div>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <Table
            size="small"
            stickyHeader
            sx={{ minWidth }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                {header.map((cell, index) => {
                  return (
                    <TableCell className={style["table-header"]} key={index}>
                      {cell}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row: any, i: number) => (
                <TableRow key={i}>
                  {Object.values(row).map((value, index) => (
                    <TableCell key={index}>{value as any}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default React.memo(TableStructure);
