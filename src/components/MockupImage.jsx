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
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Delayed from './Delayed';

import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';

const UNMOUNT_DELAY = 500;

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

const ImgContainer = styled.div`
  position: relative;
  box-shadow: 0 10px 20px -4px rgba(0,0,0,0.6);
  max-width: 100%;
  margin: 150px 0;

  display: grid;
  grid-template-columns: 1fr;
`;


const Img = styled.img`
  position: relative;

  opacity: 0;
  transition: opacity ${UNMOUNT_DELAY}ms ease;

  grid-row-start: 1;
  grid-column-start: 1;
`;

// eslint-disable-next-line react/prop-types
const FadeImage = ({ image, src, alt }) => {
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const el = image.current;

    if (el) {
      // eslint-disable-next-line react/prop-types
      el.style.opacity = 1;
    }
  }, [image, src, alt]);

  return <Img ref={image} src={src} alt={alt} />;
};

const MockupImage = ({ index }) => {
  const [prev, setPrev] = useState(0);
  const imageRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const el = imageRefs[prev].current;

    if (el && index !== prev) {
      el.style.opacity = 0;
    }

    setPrev(index);
  }, [index]);

  return (
    <ImgContainer>
      {
        images.map((item, key) => (
          <Delayed
            key={item}
            mounted={index === key}
            unmountAfter={UNMOUNT_DELAY}
            placeholder={null}
          >
            <FadeImage image={imageRefs[key]} src={item} alt={`img${key}`} />
          </Delayed>
        ))
      }
    </ImgContainer>
  );
};

MockupImage.propTypes = {
  index: PropTypes.number,
};

MockupImage.defaultProps = {
  index: 0,
};

export default MockupImage;
