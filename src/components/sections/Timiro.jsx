import React, { useState } from 'react';
import styled from 'styled-components';

import NavSection from '../bases/NavSection';
import Nav from '../nav/Nav';
import TimiroNavItem from '../nav/timiro/TimiroNavItem';
import MockupSlider from '../MockupSlider';

import Mockup from '../../images/6.jpg'
import constantList from '../../constantList';

const TimiroNavSection = styled(NavSection)`
  background: #eae096;
  color: #ff5722;
`;

export default () => {
  const [selected, select] = useState(null);
  return (
    <TimiroNavSection>
      <Nav>
        { 
          constantList.map((item, k) =>
            <TimiroNavItem aria-label={item} current={selected === k} onClick={() => select(k)} />
          )
        }
      </Nav>
      <MockupSlider>
        <img src={Mockup} alt='img6' />
        <h3>Timiro</h3>
      </MockupSlider>
    </TimiroNavSection>
  );
};
