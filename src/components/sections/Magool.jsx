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
import React, { useState } from 'react';
import styled from 'styled-components';

import Anchor from '../bases/Anchor';

import NavSection from '../bases/NavSection';
import Nav from '../nav/Nav';

import MagoolNavItem from '../nav/magool/MagoolNavItem';

import MockupSlider from '../mockup/MockupSlider';
import MockupImage from '../mockup/MockupImage';
import MockupTitle from '../mockup/MockupTitle';
import MockupSubtitle from '../mockup/MockupSubtitle';

import constantList from '../../constantList';

const MagoolNavSection = styled(NavSection)`
  background: #b5bf4b;
  color: #fff;

  & ${MockupSubtitle} {
    background: #f44336;

    & a {
      color: #ddd;
      font-weight: bold;
    }
  }
`;

export default () => {
  const [selected, select] = useState(0);
  return (
    <MagoolNavSection>
      <Nav>
        {
          constantList.map((item, k) => (
            <MagoolNavItem aria-label={item} current={selected === k} onClick={() => select(k)} />
          ))
        }
      </Nav>
      <MockupSlider>
        <MockupImage index={selected} />
        <MockupTitle>Magool</MockupTitle>
        <MockupSubtitle>
          {'Inspired by '}
          <Anchor href="https://dribbble.com/shots/2886526-Brewskies-v2">Brewskies v2</Anchor>
        </MockupSubtitle>
      </MockupSlider>
    </MagoolNavSection>
  );
};
