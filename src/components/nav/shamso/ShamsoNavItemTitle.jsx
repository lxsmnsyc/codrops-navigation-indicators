import styled from 'styled-components';
import NavItemTitle from '../NavItemTitle';

const ShamsoNavItemTitle = styled(NavItemTitle)`
  font-weight: bold;
  line-height: 1.5;
  display: block;
  margin: 0 0 0 2.5em;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  color: #c1dff9;
  -webkit-transform: scale3d(0.1,0.1,1);
  transform: scale3d(0.1,0.1,1);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, transform 0.5s;
  -webkit-transition-timing-function: cubic-bezier(0.2,1,0.3,1);
  transition-timing-function: cubic-bezier(0.2,1,0.3,1);
`;

export default ShamsoNavItemTitle;