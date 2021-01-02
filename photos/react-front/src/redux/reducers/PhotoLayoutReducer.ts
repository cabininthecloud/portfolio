import { AppReducer } from '../types/AppReducer';
import { InitialState } from '../state';

const PhotoLayoutReducer: AppReducer<'PhotoLayout'> = (
  state = InitialState.PhotoLayout,
  action
): typeof state => {
  switch (action.type) {
    case 'PhotoLayout/loaded':
      return {
        ...state,
        loaded: true,
      };
    case 'PhotoLayout/setTotal':
      return {
        ...state,
        total: action.payload,
      };
    case 'PhotoLayout/setPage':
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default PhotoLayoutReducer;
