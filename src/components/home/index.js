import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import {Container, Button} from '../common'

const Title = styled.h1`
	font-size: 4rem;
	margin:0;
	color:#272727;
	@media (max-width:700px) {
		font-size: 3rem;
	}
	`
const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	30% {
		opacity:0.5;
	}
	100% {
		opacity:1;
	}
`
const TaglineContainer = styled.div`
	margin-top:1rem;
	> span {
		opacity: 0;
		animation: ${fadeIn} 2s forwards;
		font-size: 2em;
		font-weight: 500;
	}
`
const Quotebox = styled.div`
	font-size: 2rem;
	color:#464646;
	font-weight: 100;
	font-family: 'Questrial', sans-serif;
	width:80%;
	height: 200px;
	padding: 30px 40px;
	margin:3rem auto;
	@media (max-width:700px) {
		font-size: 1rem;
	}
`
const Quip = styled.div`
	width: 80%;
	margin:auto;
	margin-top: 4rem;
	font-size: 1rem;
	text-align: justify;
	border-top: 1px solid gray;
	border-bottom: 1px solid gray;
	@media (max-width:700px) {
		width: 100%;
	}
	>p {
		font-size: 1.5rem;
	}
`
const LinkBox = styled(Quip)`
	background: #000;
	color:#FAFAFA;
	border-radius: 5px;
	text-align:center;
	cursor:pointer;
	>h1{
		font-weight: 400;
		text-decoration:none;
		color:#FAFAFA;
	}
	a:visited {
			color:#FAFAFA;
		}
`
export default class Home extends Component {
	
	Redirect(){
		window.location = "https://retrainingthebrain.com/"
	}
	render() {
		console.log(this.props)
		return (
			<div style={{marginTop:'-3rem'}}>
				<Container style={{marginBottom:'3rem'}}>
					<Title>Dynamic Neural Retraining System</Title>
					<TaglineContainer>
						<span>muokkaa aivojasi </span>
						<br />
						<span style={{animationDelay:'1s'}}>tervehdy </span>
						<br />
						<span style={{animationDelay:'2s'}}>ota elämä haltuun.</span>
					</TaglineContainer>
					<Quip>
						<p>Dynamic Neural Retraining System™ on harjoitteluun perustuva, lääkkeetön,
							neuroplastisuutta hyödyntävä kognitiivinen menetelmä, jonka avulla voi olla mahdollista toipua monista traumaperäisistä oireista.</p>
						<p><span><b>DNRS:n toimintatavat</b></span><br />
							DNRS-harjoitteet pohjautuvat neuroplastiseen terapiaan, jonka avulla limbinen järjestelmä muokkautuu ja hermoverkkoihin syntyy aiempaa toimivampia yhteyksiä.
			
							Trauman aiheuttama hermoverkkojen häiriötila voi saada limbisen järjestelmän suojelumekanismit
							toimimaan virheellisesti ja normaalia herkemmin. Seurauksena on voimistunut stressivaste, joka voi
							vaikuttaa moniin aivojen ja kehon järjestelmiin ja erityisesti niihin, jotka ovat yhteydessä tunteisiin,
							aistihavainnointiin ja kognitiivisiin toimintoihin.
			
						 	 Menetelmässä on kyse paljon muustakin kuin
							vain suhtautumistavan tai ajatusmallien muuttamisesta. Intensiivisen harjoittelun tuloksena aivoihin syntyy rakenteellisia
							ja toiminnallisia muutoksia. Olemme mukana tutkimusprojektissa, jonka tavoitteena on konkretisoida syntyviä muutoksia aivokuvannuksen avulla.
							</p>
							<br />
							
							<p>Materiaalin voi tilata ja kursseille voi ilmoittautua alle olevasta linkistä. Linkki ohjaa DNRS:n englanninkieliselle sivustolle.
							Suomenkielinen tilauspalvelu julkaistaan pian.</p>
					</Quip>
					<LinkBox onClick={this.Redirect}>
					<h1><a href="https://retrainingthebrain.com/" style={{textDecoration:'none'}}>TILAA</a></h1>
					</LinkBox>
		</Container>
		<Quotebox>
			<i>"DNRS-harjoitusten ansiosta olen palannut normaalin elämääni"</i>
			<p>-DNRS:n avulla toipunut</p>
			</Quotebox>
	</div>
			)
	}
}
