import styled from 'styled-components';

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
`;

export const LinkListItem = styled.li`
	list-style: none;
`;

export const Button = styled.button`
	color: #eee;
	border: none;
	margin-right: 1rem;
	padding: 1rem;
	background: transparent;
`;
