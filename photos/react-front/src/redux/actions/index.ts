import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  PhotoLayoutActions,
  PhotoLayoutActionsType,
} from './PhotoLayoutActions';
import { PhotosActions, PhotosActionsType } from './PhotosActions';
import {
  SearchOptionsActions,
  SearchOptionsActionsType,
} from './SearchOptionsActions';
import { State } from '../state';

export const Actions = {
  PhotoLayout: PhotoLayoutActions,
  Photos: PhotosActions,
  SearchOptions: SearchOptionsActions,
};

export type ActionsType =
  | PhotoLayoutActionsType
  | PhotosActionsType
  | SearchOptionsActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  null | undefined,
  Action<ActionsType['type']>
>;
