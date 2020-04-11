import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 50%;
	margin: 0 auto;
	border-radius: 5px;
	box-shadow: 1px 1px 2px 1px rgba(0, 0, 255 0.05);
	min-height: 30px;
	text-align: center;
	border: 1px solid dodgerblue;
	padding: 1rem;

	h3 {
		text-align: center;
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		button {
			margin: 0 1rem;
			padding: 0.25rem;
			border: none;
			border-radius: 5px;
      cursor: pointer;
		}
	}
`;
