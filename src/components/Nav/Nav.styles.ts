import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.nav`
	padding: 0;
	margin: 0;
	background: dodgerblue;
	color: white;
	box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;

export const LinkList = styled.ul`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	&:nth-child(1) {
		margin-left: 0;
	}
`;

export const LinkListItem = styled.li`
	list-style: none;
	transition: all 200ms ease;
	position: relative;

	&:hover:after {
		opacity: 1;
	}

	&:after {
		content: '';
		width: 100%;
		height: 2px;
		background: darkblue;
		position: absolute;
		bottom: 0;
		left: 0;
		opacity: 0;
		transition: all 300ms ease-in;
	}
`;

export const Link = styled(RouterLink)`
	display: block;
	position: relative;
	margin-right: 1rem;
	padding: 1rem;

	background: transparent;
	color: #eee;
	text-decoration: none;
`;
