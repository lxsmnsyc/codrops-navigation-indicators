import styled from 'styled-components';
import NavItemTitle from '../NavItemTitle';

const UbaxNavItemTitle = styled(NavItemTitle)`
  line-height: 1.5;
  display: block;
  padding: 0 0 0 2.5em;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  -webkit-transform: translate3d(-20px,0,0);
  transform: translate3d(-20px,0,0);
  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.3s;
`;

export default UbaxNavItemTitle;