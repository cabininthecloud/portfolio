export type SearchOptionsState = {
  perPage: number;
  filter: string;
};

export const intitialSearchOptionsState: SearchOptionsState = {
  perPage: 6,
  filter: '',
};
