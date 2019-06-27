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
import BertaNavItemTitle from './BertaNavItemTitle';

const BertaNavItem = styled(NavItem)`
  width: 100%;
  height: 2em;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 100%;
    height: 4px;
    margin: -3px 0 0 0;
    pointer-events: none;
    opacity: 0.5;
    background: #e53e30;
    -webkit-transform: scale3d(0.2,1,1);
    transform: scale3d(0.2,1,1);
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  &:not(.nav__item--current):focus::before,
  &:not(.nav__item--current):hover::before {
    opacity: 1;
  }

  &.nav__item--current::before {
    opacity: 1;
    -webkit-animation: moveScale 0.5s ease-in forwards;
    animation: moveScale 0.5s ease-in forwards;
  }

  &.nav__item--current ${BertaNavItemTitle} {
    -webkit-animation: moveToRight 0.5s 0.2s forwards;
    animation: moveToRight 0.5s 0.2s forwards;
  }

  @-webkit-keyframes moveScale {
    50% {
      right: auto;
      left: 0;
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1,1,1);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
    }
    51% {
      right: 0;
      left: auto;
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1,1,1);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
      -webkit-animation-timing-function: cubic-bezier(0.2,1,0.3,1);
      animation-timing-function: cubic-bezier(0.2,1,0.3,1);
    }
    100% {
      right: 0;
      left: auto;
      -webkit-transform: scale3d(0.2,1,1);
      transform: scale3d(0.2,1,1);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
    }
  }
  
  @keyframes moveScale {
    50% {
      right: auto;
      left: 0;
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1,1,1);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
    }
    51% {
      right: 0;
      left: auto;
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1,1,1);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
      -webkit-animation-timing-function: cubic-bezier(0.2,1,0.3,1);
      animation-timing-function: cubic-bezier(0.2,1,0.3,1);
    }
    100% {
      right: 0;
      left: auto;
      -webkit-transform: scale3d(0.2,1,1);
      transform: scale3d(0.2,1,1);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
    }
  }

  @-webkit-keyframes moveToRight {
    100% {
      opacity: 1;
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      -webkit-animation-timing-function: cubic-bezier(0.2,1,0.3,1);
      animation-timing-function: cubic-bezier(0.2,1,0.3,1);
    }
  }
  
  @keyframes moveToRight {
    100% {
      opacity: 1;
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      -webkit-animation-timing-function: cubic-bezier(0.2,1,0.3,1);
      animation-timing-function: cubic-bezier(0.2,1,0.3,1);
    }
  }
`;

export default BertaNavItem;
