import { PhotoLayoutState, initialPhotoLayoutState } from './PhotoLayoutState';
import { PhotosState, initialPhotosState } from './PhotosState';
import {
  SearchOptionsState,
  intitialSearchOptionsState,
} from './SearchOptionsState';

export type State = {
  PhotoLayout: PhotoLayoutState;
  Photos: PhotosState;
  SearchOptions: SearchOptionsState;
};

export const InitialState: State = {
  PhotoLayout: initialPhotoLayoutState,
  Photos: initialPhotosState,
  SearchOptions: intitialSearchOptionsState,
};
