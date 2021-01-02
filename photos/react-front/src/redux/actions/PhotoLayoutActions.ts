import { ActionType } from '../types/ActionType';

export const PhotoLayoutActions = {
  loaded: () =>
    ({
      type: 'PhotoLayout/loaded',
    } as const),
  setTotal: (total: number) =>
    ({
      type: 'PhotoLayout/setTotal',
      payload: total,
    } as const),
  setPage: (page: number) =>
    ({
      type: 'PhotoLayout/setPage',
      payload: page,
    } as const),
};

export type PhotoLayoutActionsType = ActionType<typeof PhotoLayoutActions>;
