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
import AyanaNavItemIcon from './AyanaNavItemIcon';

const AyanaNavItem = styled(NavItem)`
  margin: 1em 0;
  width: 1.5em;
  height: 1.5em;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #586c80;
    top: 0;
    left: 0;
    border-radius: 50%;
    -webkit-transform: scale3d(0,0,1);
    transform: scale3d(0,0,1);
    -webkit-transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    -webkit-animation-timing-function: cubic-bezier(0.2,1,0.3,1);
    animation-timing-function: cubic-bezier(0.2,1,0.3,1);
  }

  &.nav__item--current::before {
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    -webkit-transition-delay: 0.35s;
    transition-delay: 0.35s;
  }

  &.nav__item--current ${AyanaNavItemIcon} {
    opacity: 0;
    /* length of circle path (pi*2r) */
    stroke-dashoffset: 39;
    -webkit-transition-duration: 0.4s, 0.2s;
    transition-duration: 0.4s, 0.2s;
    -webkit-transition-delay: 0s, 0.2s;
    transition-delay: 0s, 0.2s;
  }
`;

export default AyanaNavItem;
