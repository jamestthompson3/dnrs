import styled from 'styled-components'

const Button = styled.button`
	border: 1px solid gray;
	border-radius: 3px;
	text-align:center;
	background:transparent;
	margin:auto;
	&:active,focused{
		outline:none;
		outline-style:none;
	}
`

export { Button }
