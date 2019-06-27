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
import ZahiNavItemTitle from './ZahiNavItemTitle';

const ZahiNavItem = styled(NavItem)`
  width: 2em;
  height: 2em;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &:not(:last-child)::before {
    top: calc(2em - 9px);
    left: 5px;
    width: 2px;
    height: calc(2em - 12px);
    background: #98322a;
  }

  &::after {
    top: 50%;
    left: 0;
    width: 12px;
    height: 12px;
    margin: -5px 0 0 0;
    border: 2px solid #98322a;
    border-radius: 50%;
    background: #f44336;
    -webkit-transition: -webkit-transform 0.3s, border-color 0.3s, border-width 0.3s, background 0.3s;
    transition: transform 0.3s, border-color 0.3s, border-width 0.3s, background 0.3s;
  }

  &:not(.nav__item--current):focus::after,
  &:not(.nav__item--current):hover::after {
    border-color: #fff;
    background: #fff;
  }

  &.nav__item--current::after {
    border-width: 1px;
    border-color: #fff;
    -webkit-transform: scale3d(1.6,1.6,1);
    transform: scale3d(1.6,1.6,1);
  }

  &:not(.nav__item--current):focus ${ZahiNavItemTitle},
  &:not(.nav__item--current):hover ${ZahiNavItemTitle} {
    opacity: 0.5;
  }

  &.nav__item--current ${ZahiNavItemTitle} {
    opacity: 1;
    color: #fff;
  }  
`;

export default ZahiNavItem;
