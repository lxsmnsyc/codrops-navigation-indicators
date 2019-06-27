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
import HagosNavItemTitle from './HagosNavItemTitle';
import HagosNavItemIcon from './HagosNavItemIcon';

const HagosNavItem = styled(NavItem)`
  width: 2em;
  height: 2em;

  &::before {
    content: '';
    position: absolute;
    top: 25%;
    left: 0;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background: #7cb9a6;
    -webkit-transition: background 0.5s;
    transition: background 0.5s;
    -webkit-transition-timing-function: cubic-bezier(0.2,1,0.3,1);
    transition-timing-function: cubic-bezier(0.2,1,0.3,1);
  }

  &.nav__item--current::before,
  &:not(.nav__item--current):focus::before,
  &:not(.nav__item--current):hover::before {
    background: #9c7e64;
  }

  &.nav__item--current ${HagosNavItemIcon} {
    opacity: 1;
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
  }

  &.nav__item--current ${HagosNavItemTitle} {
    opacity: 1;
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
  }
`;

export default HagosNavItem;
