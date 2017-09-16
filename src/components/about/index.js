import React, { Component } from 'react';
import {Container} from '../common'
import styled from 'styled-components'

const InfoBox = styled.div`
width: 80%;
margin:auto;
color:#333;
margin-top: 4rem;
font-size: 1rem;
padding: 0px 20px;
text-align: justify;
font-weight:100;
border-left: 1px solid gray;
border-right: 1px solid gray;
@media (max-width:700px) {
	width: 100%;
}
>p {
	font-size: 1.25rem;
}
`
export default class About extends Component {

	render() {
		return (
			<Container>
				<h1>TIETOA MENETELMÄSTÄ</h1>
				<InfoBox>
					<p><b style={{fontWeight:"600",color:'#000'}}>Minkälaisia DNRS-harjoitukset ovat?</b></p>

					<p>Aivojen muokkaaminen vaatii sinulta sekä aikaa että omistautumista. DVD-materiaali on 14 tunnin
					laajuinen ja se suositellaan käytäväksi läpi neljässä päivässä. Kurssit kestävät viisi päivää.
					Kun olet käynyt läpi materiaalin, sinun tulee harjoitella vähintään tunti päivässä ainakin seuraavat kuusi
					kuukautta. Näin harjoittelun avulla syntyneiden uusien, toimivien hermoyhteyksien on mahdollista
					vakiintua kunnolla.
					Voit pilkkoa päivittäisen harjoittelun pienempiin osiin. Jotkut harjoittelevat puolin tunnin osissa, toiset 20
					tai 15 minuuttia kerrallaan. Voit toimia omien aikataulujesi mukaisesti. DNRS-ohjaajat auttavat
					tarvittaessa sinua löytämään itseäsi parhaiten hyödyttävän rutiinin.
					Harjoituksiin kuuluu mm. fyysisiä, koko kehon harjoitteita, joihin yhdistetään puhetta ja visualisointeja.
					Harjoitukset eivät rasita fyysisesti. Harjoitteluun ei myöskään kuulu meditointia.
					DNRS on kognitiivinen aivokuntoutusohjelma, johon sisältyy tietoisesti harjoitettua tiedonkäsittelyn ja
					emootioiden muokkaamista, asteittain etenevää altistamisharjoittelua sekä käyttäytymisen
					muuntamista.
					DNRS:ssä harjoitetaan monia erilaisia sääntelytaitoja, kuten huomion kohdistamista ja siirtoa,
					kognitiivista uudelleenarviointia, tunneperäistä etäännyttämistä, tunteiden sääntelyä sekä kokemusperäistä ja asteittain etenevää altistamista koettuun uhkaan.


					<p><span><b style={{fontWeight:"600",color:'#000'}}>Kuinka nopeasti harjoittelu tehoaa?</b></span><br /></p>

					Aivojen tervehtyminen on henkilökohtaista. Jotkut saattavat huomata oireiden heikentyvän ja terveyden
					kohenevan verrattain lyhyenkin ajan sisällä, mutta ei ole tavatonta, että koetut muutokset ovat
					hienovaraisempia ja vievät pidemmän aikaa. Usein paranemisprosessiin kuuluu sekä ylä- että alamäkiä.
					Jos oireissasi ei tapahdu muutoksia päivittäin, se ei tarkoita sitä, etteikö aivojen muovatuvuusprosessi
					olisi käynnissä. Oireesi heikkenevät samalla kun uudet, terveet hermoradat vahvistuvat. Tapahtuipa
					muutos oireissa sitten nopeasti tai hitaammin, on erittäin tärkeää, että sisäistät menetelmän periaatteet ja
					sitoudut harjoittelemaan vähintään tunnin ajan päivittäin ainakin kuuden kuukauden ajan.

					Ennen harjoittelun aloittamista keskustele asiasta terveydenhoitohenkilökunnan kanssa.
					</p>

				</InfoBox>
			</Container>
		)
	}
}
