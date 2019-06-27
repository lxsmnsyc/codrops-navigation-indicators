import React, { useState } from 'react';
import styled from 'styled-components';

import NavSection from '../bases/NavSection';
import Nav from '../nav/Nav';
import UbaxNavItem from '../nav/ubax/UbaxNavItem';
import UbaxNavItemTitle from '../nav/ubax/UbaxNavItemTitle';

import MockupSlider from '../MockupSlider';
import Mockup from '../../images/3.jpg'

import constantList from '../../constantList';

const UbaxNavSection = styled(NavSection)`
  background: #e9eae5;
  color: #31312f;
`;

export default () => {
  const [selected, select] = useState(null);
  return (
    <UbaxNavSection>
      <Nav>
        { 
          constantList.map((item, k) =>
            <UbaxNavItem aria-label={item} current={selected === k} onClick={() => select(k)}>
              <UbaxNavItemTitle>{item}</UbaxNavItemTitle>
            </UbaxNavItem>
          )
        }
      </Nav>
      <MockupSlider>
        <img src={Mockup} alt='img3' />
        <h3>Ubax</h3>
      </MockupSlider>
    </UbaxNavSection>
  );
};
