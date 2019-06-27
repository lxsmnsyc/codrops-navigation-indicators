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
import ShamsoNavItemTitle from './ShamsoNavItemTitle';

const ShamsoNavItem = styled(NavItem)`
  width: 2.25em;
  height: 2.25em;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background: #5e798b;
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
    -webkit-transition-timing-function: cubic-bezier(0.2,1,0.3,1);
    transition-timing-function: cubic-bezier(0.2,1,0.3,1);
  }

  &:not(.nav__item--current):focus::before,
  &:not(.nav__item--current):hover::before {
    -webkit-transform: scale3d(1.35,1.35,1);
    transform: scale3d(1.35,1.35,1);
  }

  &.nav__item--current::before {
    -webkit-transform: scale3d(0.35,0.35,1);
    transform: scale3d(0.35,0.35,1);
  }

  &::after {
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    opacity: 0;
    box-shadow: inset 0 0 0 3px #5e798b;
    -webkit-transform: scale3d(0.35,0.35,1);
    transform: scale3d(0.35,0.35,1);
    -webkit-transition: -webkit-transform 0.5s, box-shadow 0.5s, opacity 0.5s;
    transition: transform 0.5s, box-shadow 0.5s, opacity 0.5s;
    -webkit-transition-timing-function: cubic-bezier(0.2,1,0.3,1);
    transition-timing-function: cubic-bezier(0.2,1,0.3,1);
  }

  &.nav__item--current::after {
    opacity: 1;
    box-shadow: inset 0 0 0 3px #c1dff9;
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
  }

  &.nav__item--current ${ShamsoNavItemTitle} {
    opacity: 1;
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }
`;

export default ShamsoNavItem;
