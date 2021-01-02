import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import DemoAlert from './components/DemoAlert';
import Header from './components/Header';
import PrivacyPolicy from './components/PrivacyPolicy';
import PhotoLayout from './components/PhotoLayout';
import PhotoView from './components/PhotoView';
import Footer from './components/Footer';

import columns from './utils/breakpoints';

const StyledApp = styled.div`
  height: 100%;
`;

const StyledContent = styled.div`
  position: relative;
  min-height: 100%;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;
  @media ${columns.multiple} {
    padding-bottom: 50px;
  }
  @media ${columns.two} {
    width: 628px;
  }
  @media ${columns.three} {
    width: 956px;
  }
  @media ${columns.four} {
    width: 1284px;
  }
`;

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <DemoAlert />
        <StyledContent>
          <Header />
          <Switch>
            <Route path="/privacy">
              <PrivacyPolicy />
            </Route>
            <Route path="/view/:id">
              <PhotoView />
            </Route>
            <Route path="/">
              <PhotoLayout />
            </Route>
          </Switch>
          <Footer />
        </StyledContent>
      </StyledApp>
    </>
  );
}

export default App;
