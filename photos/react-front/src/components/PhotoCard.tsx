import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import columns from '../utils/breakpoints';
import PhotoHolder from './PhotoHolder';

const StyledPhotoCard = styled.div`
  --border-color: #222;
  border-top: 1px solid var(--border-color);
  padding-top: 10px;
  padding-bottom: 10px;
  @media ${columns.multiple} {
    border: 1px solid var(--border-color);
    border-radius: 5px;
    padding: 24px;
    box-shadow: 5px 5px 30px -20px rgba(17, 17, 17, 0.5);
  }
`;

const StyledCaption = styled.p`
  text-align: center;
  font-family: chaparral-pro-caption, serif;
  font-weight: 300;
`;

interface PhotoCardProps {
  id: string;
  imgURL: string;
  user: {
    name: string;
    link: string;
  };
  description: string;
  alt_description: string;
  width: number;
  height: number;
  blurHash: string;
}

function PhotoCard({
  id,
  imgURL,
  user,
  description,
  alt_description,
  width,
  height,
  blurHash,
}: PhotoCardProps): JSX.Element {
  return (
    <StyledPhotoCard>
      <Link to={`/view/${id}`}>
        <PhotoHolder
          imgURL={imgURL}
          description={description}
          altDescription={alt_description}
          blurHash={blurHash}
          size={250}
          aspectRatio={width / height}
        />
      </Link>
      <StyledCaption>
        by{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href={`${user.link}?utm_source=cabininthecloud_portfolio&utm_medium=referral`}
        >
          {user.name}
        </a>
      </StyledCaption>
    </StyledPhotoCard>
  );
}

export default PhotoCard;
