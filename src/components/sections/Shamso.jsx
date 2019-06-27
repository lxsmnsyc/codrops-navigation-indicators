import React, { useState } from 'react';
import styled from 'styled-components';

import NavSection from '../bases/NavSection';
import Nav from '../nav/Nav';

import ShamsoNavItem from '../nav/shamso/ShamsoNavItem';
import ShamsoNavItemTitle from '../nav/shamso/ShamsoNavItemTitle';

import MockupSlider from '../MockupSlider';
import Mockup from '../../images/7.jpg'

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
          constantList.map((item, k) =>
            <ShamsoNavItem aria-label={item} current={selected === k} onClick={() => select(k)}>
              <ShamsoNavItemTitle>{item}</ShamsoNavItemTitle>
            </ShamsoNavItem>
          )
        }
      </Nav>
      <MockupSlider>
        <img src={Mockup} alt='img7' />
        <h3>Shamso</h3>
      </MockupSlider>
    </ShamsoNavSection>
  );
};
