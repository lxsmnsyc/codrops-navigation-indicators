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
import MariameNavItemTitle from './MariameNavItemTitle';

const MariameNavItem = styled(NavItem)`
  height: 2.25em;
  margin: 0 0 1em 0;
  -webkit-perspective: 500px;
  perspective: 500px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1.75em;
    height: 2.25em;
    border: 2px solid #5050b9;
    background: #a9a9d4;
  }

  &::before {
    -webkit-transition: background-color 0s 0.2s;
    transition: background-color 0s 0.2s;
  }

  &.nav__item--current::before {
    background: #f3f3f3;
    -webkit-transition: none;
    transition: none;
  }

  &::after {
    box-shadow: 0px 0 9px -4px rgba(0,0,0,0);
    -webkit-transform-origin: 1px 50%;
    transform-origin: 1px 50%;
    -webkit-transition: -webkit-transform 0.5s, background-color 0s 0.15s, box-shadow 0.5s;
    transition: transform 0.5s, background-color 0s 0.15s, box-shadow 0.5s;
  }

  &:not(.nav__item--current):focus::after,
  &:not(.nav__item--current):hover::after {
    box-shadow: 6px 0 9px -4px rgba(0,0,0,0.2);
    -webkit-transform: rotate3d(0,1,0,-15deg);
    transform: rotate3d(0,1,0,-15deg);
  }

  &.nav__item--current::after {
    background-color: #f3f3f3;
    box-shadow: 6px 0 9px -4px rgba(0,0,0,0.2);
    -webkit-transform: rotate3d(0,1,0,-145deg);
    transform: rotate3d(0,1,0,-145deg);
  }

  &:not(.nav__item--current):focus ${MariameNavItemTitle},
  &:not(.nav__item--current):hover ${MariameNavItemTitle} {
    opacity: 0.5;
  }

  &.nav__item--current ${MariameNavItemTitle} {
    opacity: 1;
  }
`;

export default MariameNavItem;
