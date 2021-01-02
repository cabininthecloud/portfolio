import IPhoto from '../../interfaces/IPhoto';
import { ActionType } from '../types/ActionType';

export const PhotosActions = {
  add: (photos: IPhoto[]) =>
    ({
      type: 'Photos/add',
      payload: photos,
    } as const),
};

export type PhotosActionsType = ActionType<typeof PhotosActions>;
