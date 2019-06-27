import styled from 'styled-components';
import Section from './Section';

const IntroSection = styled(Section)`
  font-size: 1.6em;
  position: relative;
  min-height: 100vh;
  text-align: center;
  color: #fff;
  background: #333;

  & p {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1em;
  }

  @media screen and (max-width: 50em) {
    font-size: 1em;
  }
`;

export default IntroSection;