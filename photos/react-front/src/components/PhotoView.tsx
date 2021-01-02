import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import PhotoHolder from './PhotoHolder';

import Selectors from '../redux/selectors';

let size = 600;
if (window.innerWidth < 768) {
  size = 250;
}

const StyledPhotoView = styled.div`
  width: ${size}px;
  height: ${size}px;
  margin-left: auto;
  margin-right: auto;
`;

interface IParamType {
  id: string;
}
function PhotoView(): JSX.Element {
  const { id } = useParams<IParamType>();
  const photos = useSelector(Selectors.photos);
  const photo = photos.filter((ph) => ph.id === id)[0];

  return (
    <StyledPhotoView>
      <PhotoHolder
        imgURL={photo.urls.raw}
        description={photo.description}
        altDescription={photo.alt_description}
        blurHash={photo.blur_hash}
        size={size}
        aspectRatio={photo.width / photo.height}
      />
    </StyledPhotoView>
  );
}

export default PhotoView;
