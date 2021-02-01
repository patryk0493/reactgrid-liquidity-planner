import { Column } from "@silevis/reactgrid";

export function getColumns(): Column[] {
  return [
    {
      columnId: "rowHeader",
      width: 250
    },
    { columnId: 1 },
    { columnId: 2 },
    { columnId: 3 },
    { columnId: 4 },
    { columnId: 5 },
    { columnId: 6 },
    { columnId: 7 },
    { columnId: 8 },
    { columnId: 9 },
    { columnId: 10 },
    { columnId: 11 },
    { columnId: 12 },
    {
      columnId: "sum"
    }
  ];
}
