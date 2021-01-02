import React, { useState } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { X } from '@styled-icons/feather';

import columns from '../utils/breakpoints';

const StyledDemoAlert = styled.div`
  --lineHeight: 30px;
  --textColor: #222;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #595;
  color: var(--textColor);
  height: calc(2 * var(--lineHeight));
  line-height: var(--lineHeight);
  width: 100%;
  padding-left: var(--lineHeight);
  padding-right: var(--lineHeight);
  text-align: center;
  p {
    margin: 0;
  }
  a {
    color: var(--color);
  }
  @media ${columns.multiple} {
    height: var(--lineHeight);
    padding-left: calc(2 * var(--lineHeight));
    padding-right: calc(2 * var(--lineHeight));
    text-align: left;
    p {
      display: inline-block;
    }
  }
`;

const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  width: 20px;
  height: var(--lineHeight);
  cursor: pointer;
`;

const StyledX = styled(X)`
  color: #000;
  :hover {
    color: #333;
  }
`;

function DemoAlert(): JSX.Element | null {
  const [cookies, setCookie] = useCookies(['demoAcknowledged']);
  const demoCookie = cookies.demoAcknowledged
    ? cookies.demoAcknowledged
    : false;
  const [show, setShow] = useState(!demoCookie);
  function handleButtonClick() {
    setCookie('demoAcknowledged', true, { path: '/' });
    setShow(false);
  }
  if (!show) {
    return null;
  }
  return (
    <StyledDemoAlert>
      <p>This is a demonstration application.&nbsp;</p>
      <p>
        All images are from&nbsp;
        <a href="https://unsplash.com/?utm_source=cabininthecloud_portfolio&utm_medium=referral">
          Unsplash
        </a>
      </p>
      <StyledButton onClick={handleButtonClick}>
        <StyledX />
      </StyledButton>
    </StyledDemoAlert>
  );
}

export default DemoAlert;
