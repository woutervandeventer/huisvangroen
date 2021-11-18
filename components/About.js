import styled from 'styled-components'
import SectionHeading from './SectionHeading'
import werkplek from '../public/images/werkplek.jpeg'
import plantkleuring from '../public/images/plantkleuring.jpeg'
import wachtruimte_3 from '../public/images/wachtruimte_3.jpeg'
import wachtruimte_2 from '../public/images/wachtruimte_2.jpeg'
import TextCard from './TextCard'
import SectionContainer from './SectionContainer'

const StyledAbout = styled(SectionContainer)`
  grid-area: about;
  top: 100%;

  p.intro {
    font-size: ${(props) => props.theme.fontSizes.l};
    font-style: italic;
  }

  .iframe-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
  }
  .iframe-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .text-cards {
    margin-top: 4em;
    & > * + * {
      margin-top: 3em;
    }
  }
`

export default function About() {
  return (
    <StyledAbout id="over-ons">
      <SectionHeading>Over ons</SectionHeading>
      <p className="intro">
        In een steeds drukker bestaan is Huis van Groen een plek waar je even
        kunt <span className="bold">onthaasten</span> en{' '}
        <span className="bold">ontspannen</span>. We besteden veel tijd en
        aandacht aan iedere klant, en werken op een natuurlijke en groene wijze.
      </p>
      <p>Neem een kijkje in de zaak:</p>
      <div className="iframe-wrapper full-width">
        <iframe
          src="https://www.youtube.com/embed/ybhcISnMSN8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <section className="text-cards wide">
        <TextCard src={plantkleuring} alt="Kleuring op plantaardige basis">
          <p>
            In Huis van Groen wordt niet geverfd en gepermanent. Er wordt alleen
            gebruik gemaakt van kleuring op plantaardige basis.
          </p>
        </TextCard>
        <TextCard src={werkplek} flipped alt="Kappersstoel">
          <p>
            Knippen en stylen gebeurt op een manier die past bij het haar,
            waarbij wordt uitgegaan van de natuurlijke valling. Zo zit je haar
            lange tijd goed zonder er veel aan te doen.
          </p>
        </TextCard>
        <TextCard
          src={wachtruimte_3}
          alt="Wachtruimte met comfortabele stoelen en vintage interieur"
        >
          <p>
            De zaak ademt een landelijke sfeer, met verschillende ruimtes waar
            je ontspannen kunt zitten om koffie te drinken of iets kunt lezen
            als je nog even moet wachten.
          </p>
        </TextCard>
        <TextCard src={wachtruimte_2} flipped alt="Wachtruimte bij het raam">
          <p>
            Naast eigenaar René Slierendrecht werken in Huis van Groen ook
            andere zelfstandige groene kappers: Christine, Hugo en Delia.
          </p>
        </TextCard>
      </section>
    </StyledAbout>
  )
}
