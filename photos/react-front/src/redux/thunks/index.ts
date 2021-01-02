import axios from 'axios';

import { AppThunk, Actions } from '../actions';

const getPhotos: AppThunk<Promise<void>> = async (dispatch, getState) => {
  dispatch(Actions.PhotoLayout.loaded());
  const state = getState();
  const response = await axios.get(
    `http://localhost:5000/photos?qty=${state.SearchOptions.perPage}`
  );
  const { photos, total } = response.data;
  dispatch(Actions.Photos.add(photos));
  dispatch(Actions.PhotoLayout.setTotal(total));
};

export default getPhotos;
