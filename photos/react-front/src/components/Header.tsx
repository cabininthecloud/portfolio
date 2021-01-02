import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding-top: 40px;
`;

const StyledTitle = styled.h1`
  a {
    text-decoration: none;
  }
`;

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <StyledTitle>
        <Link to="/">Photo Prints</Link>
      </StyledTitle>
    </StyledHeader>
  );
}

export default Header;
