import { AppReducer } from '../types/AppReducer';
import { InitialState } from '../state';

const PhotosReducer: AppReducer<'Photos'> = (
  state = InitialState.Photos,
  action
): typeof state => {
  switch (action.type) {
    case 'Photos/add':
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
};

export default PhotosReducer;
