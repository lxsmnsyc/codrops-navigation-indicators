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

import KafaNavItem from '../nav/kafa/KafaNavItem';
import KafaNavItemTitle from '../nav/kafa/KafaNavItemTitle';
import KafaNavItemInner from '../nav/kafa/KafaNavItemInner';
import KafaNavItemImage from '../nav/kafa/KafaNavImage';

import MockupSlider from '../mockup/MockupSlider';
import MockupImage from '../mockup/MockupImage';
import MockupTitle from '../mockup/MockupTitle';

import constantList from '../../constantList';

import avatar1 from '../../images/avatar-1.svg';
import avatar2 from '../../images/avatar-2.svg';
import avatar3 from '../../images/avatar-3.svg';
import avatar4 from '../../images/avatar-4.svg';
import avatar5 from '../../images/avatar-5.svg';

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
];

const KafaNavSection = styled(NavSection)`
  background: #d2f1ca;
  color: #e54f4f;
`;

export default () => {
  const [selected, select] = useState(0);
  return (
    <KafaNavSection>
      <Nav>
        {
          constantList.map((item, k) => (
            <KafaNavItem aria-label={item} current={selected === k} onClick={() => select(k)}>
              <KafaNavItemInner>
                <KafaNavItemImage src={avatars[k % 5]} alt={`icon${k}`} />
              </KafaNavItemInner>
              <KafaNavItemTitle>{item}</KafaNavItemTitle>
            </KafaNavItem>
          ))
        }
      </Nav>
      <MockupSlider>
        <MockupImage index={selected} />
        <MockupTitle>Kafa</MockupTitle>
      </MockupSlider>
    </KafaNavSection>
  );
};
