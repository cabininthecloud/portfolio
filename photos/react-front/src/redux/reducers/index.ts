import { combineReducers } from 'redux';

import PhotoLayoutReducer from './PhotoLayoutReducer';
import PhotosReducer from './PhotosReducer';
import SearchOptionsReducer from './SearchOptionsReducer';

const Reducer = combineReducers({
  PhotoLayout: PhotoLayoutReducer,
  Photos: PhotosReducer,
  SearchOptions: SearchOptionsReducer,
});

export default Reducer;
