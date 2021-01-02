/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import PhotoCard from './PhotoCard';
import IPhoto from '../interfaces/IPhoto';
import Selectors from '../redux/selectors';
import getPhotos from '../redux/thunks';

const StyledPhotoLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
`;

function PhotoLayout(): JSX.Element {
  const dispatch = useDispatch();

  const loaded = useSelector(Selectors.loaded);
  const photos = useSelector(Selectors.photos);

  if (!loaded) {
    dispatch(getPhotos);
  }
  return (
    <>
      <StyledPhotoLayout>
        {photos.map((photo: IPhoto) => {
          return (
            <PhotoCard
              key={photo.id}
              id={photo.id}
              imgURL={photo.urls.raw}
              user={{
                name: photo.user.name,
                link: photo.user.links.html,
              }}
              description={photo.description}
              alt_description={photo.description}
              width={photo.width}
              height={photo.height}
              blurHash={photo.blur_hash}
            />
          );
        })}
      </StyledPhotoLayout>
    </>
  );
}

export default PhotoLayout;
