import React, { useState } from 'react';
import styled from 'styled-components';
import { Blurhash } from 'react-blurhash';

interface IPhotoHolderProps {
  imgURL: string;
  description: string;
  altDescription: string;
  blurHash: string;
  size: number;
  aspectRatio: number;
}

const StyledPHotoHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    z-index: 100;
    opacity: 0;
    @keyframes loaded {
      to {
        opacity: 1;
      }
    }
    &.loaded {
      animation: loaded 200ms ease-in-out forwards;
    }
  }
`;

function PhotoHolder({
  imgURL,
  description,
  altDescription,
  blurHash,
  size,
  aspectRatio,
}: IPhotoHolderProps): JSX.Element {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageFormatParams = '&crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80';
  const imageSizeParams = `&w=${size}&h=${size}`;

  let title = '';
  if (altDescription) {
    title = altDescription;
  } else if (description) {
    title = description;
  }
  return (
    <StyledPHotoHolder style={{ width: size, height: size }}>
      <img
        src={imgURL + imageFormatParams + imageSizeParams}
        alt={title}
        onLoad={() => setImageLoaded(true)}
        className={imageLoaded ? 'loaded' : ''}
      />
      <Blurhash
        hash={blurHash}
        width={aspectRatio >= 1 ? size : Math.floor(size * aspectRatio)}
        height={aspectRatio <= 1 ? size : Math.floor(size / aspectRatio)}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
    </StyledPHotoHolder>
  );
}

export default PhotoHolder;
