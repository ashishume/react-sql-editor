import { Button } from "@mui/material";
import React from "react";
import { SVGs } from "../../shared/images/images-list";
import { IActionButtons } from "../../shared/models/TableStructure";

const ActionButtons = ({
  query,
  handleRunQuery,
  handleReset,
}: IActionButtons) => {
  return (
    <>
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
        onClick={handleReset}
      >
        {SVGs({ color: !query ? "lightgray" : "darkred" }).ResetButton}
        Reset
      </Button>
    </>
  );
};

export default React.memo(ActionButtons);
