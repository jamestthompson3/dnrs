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
						
						<p>Dynamic Neural Retraining System&trade; on lääkkeetön, aivojen muokkautuvuutta hyödyntävä harjoitusmenetelmä, jonka avulla voi olla mahdollista saada apua oireisiin ja toipua monista toiminnallisista häiriöistä ja sairauksista, joiden taustalla voidaan olettaa olevan aivojen limbisen järjestelmän virheellinen toiminta. Niitä ovat esimerkiksi monikemikaaliherkkyys, fibromyalgia, krooninen väsymysoireyhtymä, sähköherkkyys, ruokayliherkkyydet, sisäilmasairaudet ja krooninen kipu.
						</p>
						
						<LinkBox onClick={this.Redirect}>
							<h1><a href="https://retrainingthebrain.com/" style={{textDecoration:'none',color:'white'}}>TILAA</a></h1>
						</LinkBox>

						<p align="center"><span align="center"><b>Perustietoa DNRS:stä</b></span><br/>
							Monet eri tekijät, kuten esimerkiksi virukset, fyysiset vammat, emotionaalinen stressi tai altistuminen
							Monet eri tekijät, kuten esimerkiksi virukset, fyysiset vammat, emotionaalinen stressi tai altistuminen homeelle tai kemikaaleille voivat aiheuttaa aivojen limbisen järjestelmän häiriötilan. Tuolloin limbisen järjestelmän suojelumekanismit alkavat toimia virheellisesti ja normaalia herkemmin. Seurauksena on vääristynyt stressivaste, joka voi vaikuttaa haitallisesti moniin aivojen ja kehon järjestelmiin. DNRS:n intensiivisten harjoitteiden avulla limbinen järjestelmä muokkautuu, jolloin hermoverkkoihin syntyyy aiempaa toimivampia yhteyksiä ja kroonistunut virheellinen stressivaste palautuu normaaliksi. Tämän seurauksena oireiden on mahdollista alkaa heikentyä ja hävitä.
						</p><p>	DNRS ei ole hoito tai terapia vaan harjoitteluohjelma. Se ei korvaa millään tavoin lääkärin palveluja. Harjoittelua tulee tehdä vähintään tunti päivässä ainakin kuuden kuukauden ajan.
							</p><p>Tällä hetkellä DNRS:ää tutkitaan kahdessa eri yliopistossa Kanadassa. Mc Master Universityn havaintotutkimuksessa on mukana 100 henkilöä, jotka ovat käyneet DNRS-kurssin. Tutkimuksessa selvitetään DNRS-harjoittelun vaikutusta 21 krooniseen oireyhtymään ja sairauteen. Calgaryn yliopistossa tutkitaan aivokuvannuksen avulla harjoittelun vaikutusta monikemikaaliherkkyyteen, krooniseen väsymysoireyhtymään, fibromyalgiaan ja POTS:iin.
						</p><p>DDNRS-menetelmän on kehittänyt kanadalainen Annie Hopper, joka on itse kärsinyt vakavasta monikemikaaliherkkyydestä, fibromyalgiasta ja sähköherkkyydestä. Hän on toipunut niistä täysin ja on vuodesta 2008 lähtien auttanut muita sairastuneita eri puolilla maailmaa pitämillään kursseilla ja laatimansa DVD-opetusmateriaalin avulla. Hän on luennoinut menetelmästä esimerkiksi Amerikan ympäristölääketieteen akatemian konferenssissa (The Academy of Environmental Medicine) ja Funktionaalisen lääketieteen instituutin konferenssissa (The Institute of Functional Medicine). 
						</p><p>	DNRS- menetelmän mukaan erilaiset ympäristötekijät saattavat olla vaikuttamassa limbisen järjestelmän häiriötilan syntyyn. Tämän vuoksi terveyttä ja hyvinvointia ylläpitävän ja edistävän elin- ja toimintaympäristön takaaminen on aina ensiarvoisen tärkeää.
							
							</p>
							<br />
							
							<p>Opetusmateriaalin voi tilata ja kursseille ilmoittautua alle olevasta linkistä. Linkki ohjaa DNRS:n englanninkieliselle sivustolle. Materiaalipaketti 1 on saatavana kokonaan suomeksi. </p>
					</Quip>
					<LinkBox onClick={this.Redirect}>
					<h1><a href="https://retrainingthebrain.com/" style={{textDecoration:'none',color:'white'}}>TILAA</a></h1>
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
