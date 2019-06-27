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
import TotitNavItemTitle from './TotitNavItemTitle';
import TotitNavItemIcon from './TotitNavItemIcon';

const TotitNavItem = styled(NavItem)`
  width: 2.5em;
  height: 2.5em;
  margin: 0.5em 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.65em;
    height: 0.65em;
    margin: -0.325em 0 0 -0.325em;
    border-radius: 50%;
    background: #fff;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    -webkit-animation-timing-function: cubic-bezier(0.2,1,0.3,1);
    animation-timing-function: cubic-bezier(0.2,1,0.3,1);
  }

  &:not(.nav__item--current):focus::before,
  &:not(.nav__item--current):hover::before {
    opacity: 0.6;
  }

  &.nav__item--current::before {
    opacity: 0;
    -webkit-transform: translate3d(0,1.5em,0) scale3d(0,0,1);
    transform: translate3d(0,1.5em,0) scale3d(0,0,1);
  }

  &.nav__item--current ${TotitNavItemIcon} {
    opacity: 1;
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
  }

  &.nav__item--current ${TotitNavItemTitle} {
    opacity: 1;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -webkit-transition-delay: 0.15s;
    transition-delay: 0.15s;
  }
`;

export default TotitNavItem;
