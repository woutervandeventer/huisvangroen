import styled from 'styled-components'
import Button from './Button'
import SectionContainer from './SectionContainer'

const StyledHero = styled(SectionContainer)`
  grid-area: hero;
  background: #000000a4 url('/images/background.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  min-height: 100vh;
  padding-bottom: 2em;
  align-content: center;
  justify-items: center;

  h1 {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
    font-weight: 900;
    text-transform: uppercase;
    white-space: pre-wrap;
    color: #ffd5aac1;
    margin-top: 1em;

    span {
      display: inline-block;
    }
  }

  p {
    max-width: 50ch;
    font-size: ${(props) => props.theme.fontSizes.l};
    font-weight: 400;
    line-height: 1.5em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 0.5em;
  }

  @media (${(props) => props.theme.media.m}) {
    min-height: calc(100vh - ${(props) => props.theme.navHeight});
  }
`

export default function Hero() {
  return (
    <StyledHero id="home">
      <h1 className="wide">
        <span>Welkom bij </span>
        <span>Huis van Groen</span>
      </h1>
      <p className="wide">
        Huis van Groen is een zaak met zelfstandige groene kappers. Knippen is
        hun passie en respect voor de natuur staat bij hen bovenaan.
      </p>
      <Button
        onClick={() =>
          document
            .querySelector('#contact')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        Afspraak maken
      </Button>
    </StyledHero>
  )
}
