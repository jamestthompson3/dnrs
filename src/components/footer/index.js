import React from 'react'
import styled from 'styled-components'

const FooterBox = styled.div`
	margin-top: 3rem;
	text-align:center;
	width:100%;
	border-top: 1px solid gray;
	padding:10px;
	position: relative;
	top:100%;
`

const Footer = ()=> {
	return (
		<FooterBox> copyright DNRS FI 2017</FooterBox>
		)
}

export default Footer