import {
  DefaultCellTypes,
  NumberCell,
  Row,
  TextCell
} from "@silevis/reactgrid";

import { Outcome, Income } from "./interfaces";

const emptyTextCell: TextCell = { type: "text", text: "" };
const emptyNumberCell = { type: "number", value: NaN } as NumberCell;

const textCell = (text: string): TextCell => ({ type: "text", text });
const numberCell = (value: number): NumberCell => ({ type: "number", value });

const nonEditable = (cell: DefaultCellTypes): DefaultCellTypes => ({
  ...cell,
  nonEditable: true
});

const showZero = (cell: NumberCell): NumberCell => ({
  ...cell,
  nanToZero: true,
  hideZero: false
});

const boldLine = (cell: DefaultCellTypes): DefaultCellTypes => ({
  ...cell,
  style: {
    border: {
      top: {
        width: "2px",
        color: "gray",
        style: "solid"
      }
    }
  }
});

function getTopRows(Anfangsbestand: number): Row[] {
  return [
    {
      rowId: "top-1",
      height: 35,
      cells: [
        nonEditable(emptyTextCell),
        nonEditable(textCell("1")),
        nonEditable(textCell("2")),
        nonEditable(textCell("3")),
        nonEditable(textCell("4")),
        nonEditable(textCell("5")),
        nonEditable(textCell("6")),
        nonEditable(textCell("7")),
        nonEditable(textCell("8")),
        nonEditable(textCell("9")),
        nonEditable(textCell("10")),
        nonEditable(textCell("11")),
        nonEditable(textCell("12")),
        nonEditable(textCell("Sum"))
      ]
    },
    {
      rowId: "top-2",
      cells: [
        boldLine(nonEditable(textCell("I. Liquide Mittel"))),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell))
      ]
    },
    {
      rowId: "top-3",
      cells: [
        nonEditable(textCell("Kasse/Bank")),
        numberCell(Anfangsbestand),
        nonEditable(showZero(numberCell(-1))),
        nonEditable(showZero(numberCell(-1))),
        nonEditable(showZero(numberCell(-1))),
        nonEditable(showZero(numberCell(-1))),
        nonEditable(showZero(numberCell(-1))),
        nonEditable(showZero(numberCell(-1))),
        nonEditable(showZero(numberCell(-1))),
        nonEditable(showZero(numberCell(-1))),
        nonEditable(showZero(numberCell(-1))),
        nonEditable(showZero(numberCell(-1))),
        nonEditable(showZero(numberCell(-1))),
        nonEditable(showZero(numberCell(-22)))
      ]
    }
  ];
}

function generateOperationRows(
  title: string,
  operations: (Income | Outcome)[]
): Row[] {
  const mappedOperations = operations.map<Row>((op) => {
    const yearSum = op.values.reduce((prev, curr) => {
      return (Number.isNaN(prev) ? 0 : prev) + (Number.isNaN(curr) ? 0 : curr);
    }, 0);
    return {
      rowId: op.title,
      cells: [
        textCell(op.title),
        numberCell(op.values[0]),
        numberCell(op.values[1]),
        numberCell(op.values[2]),
        numberCell(op.values[3]),
        numberCell(op.values[4]),
        numberCell(op.values[5]),
        numberCell(op.values[6]),
        numberCell(op.values[7]),
        numberCell(op.values[8]),
        numberCell(op.values[9]),
        numberCell(op.values[10]),
        numberCell(op.values[11]),
        nonEditable(showZero(numberCell(yearSum)))
      ]
    };
  });
  return [
    {
      rowId: `${title} - header`,
      cells: [
        boldLine(nonEditable(textCell(title))),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell)),
        boldLine(nonEditable(emptyTextCell))
      ]
    },
    ...mappedOperations
  ];
}

export function getRows(
  income: Income[],
  outcome: Outcome[],
  Anfangsbestand: number
): Row[] {
  return [
    ...getTopRows(Anfangsbestand),
    ...generateOperationRows("II. Incomes", income),
    ...generateOperationRows("III. Outcomes", outcome)
  ];
}
