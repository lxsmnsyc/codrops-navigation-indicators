import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Intro from './components/sections/Intro';
import Timiro from './components/sections/Timiro';
import Ubax from './components/sections/Ubax';

import './css/normalize.css';
import Shamso from './components/sections/Shamso';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before { -webkit-box-sizing: border-box; box-sizing: border-box; }
  body {
    font-family: 'Roboto Mono', monospace;
    color: #1b3050;
    background: #f9f0d0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Intro />
      <Ubax />
      <Shamso />
      <Timiro />
    </React.Fragment>
  );
}

export default App;
