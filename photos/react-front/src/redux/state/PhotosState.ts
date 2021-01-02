import IPhoto from '../../interfaces/IPhoto';

export type PhotosState = {
  photos: IPhoto[];
};

export const initialPhotosState: PhotosState = {
  photos: [],
};
