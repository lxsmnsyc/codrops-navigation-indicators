import styled from 'styled-components';

const MockupSlider = styled.div`
  position: relative;
  width: calc(100% - 12em);
  margin: 0 0 0 2em;
  max-width: 600px;

  &::before,
  &::after {
    content: '';
    width: 100%;
    background: rgba(0,0,0,0.05);
    height: 100px;
    position: absolute;
    top: 0;
  }

  &::after {
    top: auto;
	  bottom: 0;
  }

  & img {
    position: relative;
    display: block;
    max-width: 100%;
    margin: 150px 0;
    box-shadow: 0 10px 20px -4px rgba(0,0,0,0.6);
  }

  & h3 {
    position: absolute;
    font-size: 3em;
    bottom: 30%;
    left: -0.5em;
    font-weight: normal;
    margin: 0;
  }


  @media screen and (max-width: 50em) {
    display: none;
  }
`;

export default MockupSlider;
