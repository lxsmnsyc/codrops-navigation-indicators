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
import MaxamedNavItemTitle from './MaxamedNavItemTitle';

const MaxamedNavItem = styled(NavItem)`
  width: 2.25em;
  height: 2.25em;

  &::before {
    content: '';
    position: absolute;
    top: 0.75em;
    right: 0;
    width: 1em;
    height: 1em;
    box-shadow: inset 0 0 0 6px #609279;
    border-radius: 50%;
    -webkit-transition: -webkit-transform 0.3s, box-shadow 0.3s;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  &:not(.nav__item--current):focus::before,
  &:not(.nav__item--current):hover::before {
    box-shadow: inset 0 0 0 6px #4b7560;
  }

  &.nav__item--current::before {
    -webkit-transform: scale3d(1.75,1.75,1);
    transform: scale3d(1.75,1.75,1);
    box-shadow: inset 0 0 0 1px #609279;
  }

  &.nav__item--current ${MaxamedNavItemTitle} {
    opacity: 1;
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
  }
`;

export default MaxamedNavItem;
