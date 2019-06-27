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
import NavItem from '../NavItem';

const BecaNavItem = styled(NavItem)`
  width: 1.5em;
  height: 1.25em;
  
  &::after {
    content: '';
    position: absolute;
    top: 45%;
    left: 0;
    width: 100%;
    height: 10%;
    background: #949a52;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transition: -webkit-transform 0.5s, background-color 0.5s;
    transition: transform 0.5s, background-color 0.5s;
    -webkit-transition-timing-function: cubic-bezier(0.2,1,0.3,1);
    transition-timing-function: cubic-bezier(0.2,1,0.3,1);
  }

  &:not(.nav__item--current):focus::after,
  &:not(.nav__item--current):hover::after {
    background: #707539;
  }

  &:not(.nav__item--current):hover::after {
    -webkit-transform: scale3d(2,1,1);
    transform: scale3d(2,1,1);
  }

  &.nav__item--current::after {
    background: #333;
    -webkit-transform: scale3d(2,1,1);
    transform: scale3d(2,1,1);
  }
`;

export default BecaNavItem;
