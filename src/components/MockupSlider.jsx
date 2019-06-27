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
import styled from 'styled-components';

const MockupSlider = styled.div`
  position: relative;
  width: calc(100% - 12em);
  margin: 0 0 0 2em;
  max-width: 600px;

  &::before,
  &::after {
    content: '';
    width: 100%;
    background: rgba(0,0,0,0.05);
    height: 100px;
    position: absolute;
    top: 0;
  }

  &::after {
    top: auto;
    bottom: 0;
  }

  & img {
    position: relative;
    display: block;
    max-width: 100%;
    margin: 150px 0;
    box-shadow: 0 10px 20px -4px rgba(0,0,0,0.6);
  }

  & h3 {
    position: absolute;
    font-size: 3em;
    bottom: 30%;
    left: -0.5em;
    font-weight: normal;
    margin: 0;
  }


  @media screen and (max-width: 50em) {
    display: none;
  }
`;

export default MockupSlider;
