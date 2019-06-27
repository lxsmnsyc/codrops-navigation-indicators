import styled from 'styled-components';
import Section from './Section';

const NavSection = styled(Section)`
	position: relative;
	overflow: hidden;
	-webkit-flex-direction: row-reverse;
	flex-direction: row-reverse;


  @media screen and (max-width: 50em) {
		padding: 4em 0;
	}
`;

export default NavSection;