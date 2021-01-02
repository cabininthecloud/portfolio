export type PhotoLayoutState = {
  loaded: boolean;
  total: number;
  page: number;
};

export const initialPhotoLayoutState: PhotoLayoutState = {
  loaded: false,
  total: 0,
  page: 1,
};
