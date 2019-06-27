/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Intro from './components/sections/Intro';
import Timiro from './components/sections/Timiro';
import Ubax from './components/sections/Ubax';
import Shamso from './components/sections/Shamso';
import Maxamed from './components/sections/Maxamed';

import './css/normalize.css';
import Hagos from './components/sections/Hagos';
import SVGSheet from './components/SVGSheet';
import Zahi from './components/sections/Zahi';
import Magool from './components/sections/Magool';
import Xusni from './components/sections/Xusni';
import Beca from './components/sections/Beca';
import Etefu from './components/sections/Etefu';
import Meklit from './components/sections/Meklit';
import Mariame from './components/sections/Mariame';

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
      <SVGSheet />
      <Intro />
      <Ubax />
      <Shamso />
      <Maxamed />
      <Hagos />
      <Zahi />
      <Magool />
      <Xusni />
      <Beca />
      <Etefu />
      <Meklit />
      <Timiro />
      <Mariame />
    </React.Fragment>
  );
}

export default App;
