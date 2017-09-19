import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const header = styled.div`
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
	height: 56px;
	padding: 0;
	background: transparent;
	z-index: 50;
	font-family: 'Questrial', sans-serif;
`
const NavContainer = styled.nav`
	float: right;
	font-size: 100%;
	@media (max-width: 700px) {
		display: none;
	}
	> a {
		display: inline-block;
		height: 56px;
		line-height: 56px;
		font-size:1.25rem;
		padding: 0 15px;
		min-width: 50px;
		text-align: center;
		background: transparent;
		text-decoration: none;
		color: #424242;
		will-change: background-color;
		&:hover, &:active {
			background: rgba(255,255,255,0.3);
	}
}
`
const MobileNav = styled.nav`
font-size: 3rem;
cursor: pointer;
display: none;
@media (max-width: 700px) {
	display: block;
}
> a {
	display: inline-block;
	height: 56px;
	line-height: 56px;
	padding: 0 15px;
	min-width: 50px;
	text-align: right;
	background: transparent;
	text-decoration: none;
	color: #424242;
	will-change: background-color;
	&:hover, &:active {
		background: rgba(255,255,255,0.3);
	}
}
`
const MobileMenu = styled.div`
	display: ${props => props.visible? 'block' : 'none'};
	width: 200px;
	height: 80px;
	background-color: #FAFAFA;
	position: absolute;
  z-index: 100;
	top: 3rem;
  left: 2rem;
	box-shadow: 0 0 4px 2px #cacaca;
		> a {
			display: inline-block;
			text-align: center;
			padding: 10px;
			width:100%;
			margin:auto;
			background: transparent;
			text-decoration: none;
			color: #424242;
			will-change: background-color;
			&:hover, &:active {
				background: rgba(255,255,255,0.3);
			}
`

export default class Header extends Component {
	constructor(){
		super()
		this.state = {
			visible:false
		}
		this.showMenu = this.showMenu.bind(this)
	}
	showMenu(){
		const {visible} = this.state
		this.setState({visible:!visible})
	}
	render() {
		const { visible } = this.state
		return (
			<header>
				<img style={{width:'20%',marginTop:'0.75rem',marginLeft:'1rem'}} src="https://retrainingthebrain.com/wp-content/uploads/2015/10/logo-dnrs.png" />
				<NavContainer>
					<Link to="/">koti</Link>//
					<Link to="/about">tietoa</Link>
				</NavContainer>
				<MobileNav onClick={this.showMenu}><a>&#8942;</a></MobileNav>
				<MobileMenu visible={visible}>
				<Link to="/" onClick={this.showMenu} >koti</Link>
				<br />
				<Link to="/about" onClick={this.showMenu} >tietoa</Link>
				</MobileMenu>
			</header>
		);
	}
}
