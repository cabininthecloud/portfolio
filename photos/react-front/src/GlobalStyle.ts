import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --text-color: #EEE;
  }
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  html, body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    background-color: #333;
    color: var(--text-color);
    font-family: chaparral-pro, serif;
    font-weight: 300;
  }
  h1, h2 {
    font-family: chaparral-pro-display, serif;
    font-weight: 400;
  }
  a {
    color: var(--text-color);
  }
  a:hover {
    text-decoration: none;
  }
`;

export default GlobalStyle;
