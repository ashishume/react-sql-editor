export interface ITableQueryData {
  table: any[];
  label: string;
  query: string;
  index: number;
}
export interface IActionButtons {
  query: string;
  handleRunQuery: () => void;
  handleReset: () => void;
}