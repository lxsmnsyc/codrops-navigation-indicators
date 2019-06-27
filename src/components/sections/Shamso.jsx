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

import ShamsoNavItem from '../nav/shamso/ShamsoNavItem';
import ShamsoNavItemTitle from '../nav/shamso/ShamsoNavItemTitle';

import MockupSlider from '../MockupSlider';
import Mockup from '../../images/7.jpg';

import constantList from '../../constantList';

const ShamsoNavSection = styled(NavSection)`
  background: #93b1c5;
  color: #ff98bb;
`;

export default () => {
  const [selected, select] = useState(null);
  return (
    <ShamsoNavSection>
      <Nav>
        {
          constantList.map((item, k) => (
            <ShamsoNavItem aria-label={item} current={selected === k} onClick={() => select(k)}>
              <ShamsoNavItemTitle>{item}</ShamsoNavItemTitle>
            </ShamsoNavItem>
          ))
        }
      </Nav>
      <MockupSlider>
        <img src={Mockup} alt="img7" />
        <h3>Shamso</h3>
      </MockupSlider>
    </ShamsoNavSection>
  );
};
