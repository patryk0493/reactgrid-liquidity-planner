export type MonthTuple = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export type IncomeTypes =
  | "Umsatzerlöse"
  | "Sonstige Erlöse"
  | "Darlehensauszahlung"
  | "Privateinlagen/Eigenkapital"
  | "Sonstige Zahlungseingänge";

export type OutcomeTypes =
  | "Waren-/Materialeinsatz"
  | "Personalkosten (inkl. AG-Anteil)"
  | "Raumkosten/Miete"
  | "Heizung, Strom, Wasser, Gas";

export type Operation<T> = {
  title: T;
  values: MonthTuple;
};

export type Income = Operation<IncomeTypes>;
export type Outcome = Operation<OutcomeTypes>;
