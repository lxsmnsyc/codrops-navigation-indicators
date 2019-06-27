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

import NavSection from '../bases/NavSection';
import Nav from '../nav/Nav';

import MaxamedNavItem from '../nav/maxamed/MaxamedNavItem';
import MaxamedNavItemTitle from '../nav/maxamed/MaxamedNavItemTitle';

import MockupSlider from '../MockupSlider';
import MockupImage from '../MockupImage';

import constantList from '../../constantList';

const MaxamedNavSection = styled(NavSection)`
  background: #78b395;
  color: #fff;
`;

export default () => {
  const [selected, select] = useState(0);
  return (
    <MaxamedNavSection>
      <Nav>
        {
          constantList.map((item, k) => (
            <MaxamedNavItem aria-label={item} current={selected === k} onClick={() => select(k)}>
              <MaxamedNavItemTitle>{item}</MaxamedNavItemTitle>
            </MaxamedNavItem>
          ))
        }
      </Nav>
      <MockupSlider>
        <MockupImage index={selected} />
        <h3>Maxamed</h3>
      </MockupSlider>
    </MaxamedNavSection>
  );
};
