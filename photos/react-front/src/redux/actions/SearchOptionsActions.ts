import { ActionType } from '../types/ActionType';

export const SearchOptionsActions = {
  updatePerPage: (num: number) =>
    ({
      type: 'SearchOptions/updatePerPage',
      payload: num,
    } as const),
  updateFilter: (filter: string) =>
    ({
      type: 'SearchOptions/updateFilter',
      payload: filter,
    } as const),
};

export type SearchOptionsActionsType = ActionType<typeof SearchOptionsActions>;
