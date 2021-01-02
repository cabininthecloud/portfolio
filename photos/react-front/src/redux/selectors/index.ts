import { State } from '../state';
import IPhoto from '../../interfaces/IPhoto';

const Selectors = {
  loaded: (state: State): boolean => state.PhotoLayout.loaded,
  perPage: (state: State): number => state.SearchOptions.perPage,
  filter: (state: State): string => state.SearchOptions.filter,
  photos: (state: State): IPhoto[] => state.Photos.photos,
};

export default Selectors;
