import * as React from "react";
import { ReactGrid } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import {} from "./interfaces";
import { getColumns } from "./getColumns";
import { getRows } from "./getRows";
import { incomes as emptyIncomes, outcomes as emptyOutcomes } from "./rawData";

const BudgetPlanner: React.FC = () => {
  const [incomes, setIncomes] = React.useState(() => {
    return emptyIncomes;
  });
  const [outcomes, setOutcomes] = React.useState(() => {
    return emptyOutcomes;
  });
  const columns = getColumns();
  const rows = getRows(incomes, outcomes, 1337);

  return (
    <div style={{ width: 400 }}>
      <h1>Work in progress</h1>
      <ReactGrid rows={rows} columns={columns} stickyLeftColumns={1} />
    </div>
  );
};

export default BudgetPlanner;
