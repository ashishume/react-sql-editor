import style from "./style.module.scss";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  tableCellClasses,
  styled,
} from "@mui/material";
const TableStructure = ({
  tableData,
  heading,
  minWidth,
}: {
  tableData: any;
  heading?: string;
  minWidth: number;
}) => {
  const header = Object.keys(tableData[0]);
  return (
    <div className={style["container"]}>
      {heading && <h2>{heading}</h2>}
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table  size="small" stickyHeader sx={{ minWidth }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {header.map((cell,index) => {
                return (
                  <TableCell
                    style={{
                      background: "#d3dce6",
                      color: "#25265e",
                      fontWeight: "bold",
                    }}
                    key={index}
                  >
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
  );
};

export default TableStructure;
