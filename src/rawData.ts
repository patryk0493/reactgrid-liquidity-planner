import { Income, Outcome, MonthTuple } from "./interfaces";

const emptyMonthsValues: MonthTuple = [
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN
];

export const incomes: Income[] = [
  {
    title: "Umsatzerlöse",
    values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    title: "Darlehensauszahlung",
    values: emptyMonthsValues
  },
  {
    title: "Privateinlagen/Eigenkapital",
    values: emptyMonthsValues
  },
  {
    title: "Sonstige Zahlungseingänge",
    values: emptyMonthsValues
  },
  {
    title: "Sonstige Erlöse",
    values: emptyMonthsValues
  }
];

export const outcomes: Outcome[] = [
  {
    title: "Heizung, Strom, Wasser, Gas",
    values: emptyMonthsValues
  },
  {
    title: "Personalkosten (inkl. AG-Anteil)",
    values: emptyMonthsValues
  },
  {
    title: "Raumkosten/Miete",
    values: emptyMonthsValues
  },
  {
    title: "Waren-/Materialeinsatz",
    values: emptyMonthsValues
  }
];
