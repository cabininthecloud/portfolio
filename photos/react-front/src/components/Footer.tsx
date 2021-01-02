import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import columns from '../utils/breakpoints';

const StyledFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p:first-of-type {
    display: none;
  }
  @media ${columns.multiple} {
    flex-direction: row;
    p:first-of-type {
      display: block;
    }
  }
`;

function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <p>&nbsp;</p>
      <p>&copy;2020-{new Date().getFullYear()} Eric Schmidt</p>
      <p>
        <Link to="/privacy">Privacy Policy</Link>
      </p>
    </StyledFooter>
  );
}

export default Footer;
