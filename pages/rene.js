import Image from 'next/image'
import styled from 'styled-components'
import SectionContainer from '../components/SectionContainer'
import SectionHeading from '../components/SectionHeading'
import bussen from '../public/images/bussen.jpeg'
import coiffeur from '../public/images/coiffeur.jpeg'
import stoel from '../public/images/stoel.jpeg'
import tuin from '../public/images/tuin.jpeg'

const StyledMain = styled.main`
  background-color: ${(props) => props.theme.colors.primary};
  padding-bottom: 3em;

  blockquote {
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0.01em;

    &::before,
    &::after {
      color: ${(props) => props.theme.colors.accent};
      opacity: 0.6;
      font-size: 3em;
      vertical-align: -0.4em;
      line-height: 0.1em;
    }
  }

  blockquote::before {
    content: open-quote;
    margin-right: 0.1em;
  }

  blockquote::after {
    content: close-quote;
    margin-left: 0.1em;
  }
`

export default function Rene() {
  return (
    <StyledMain id="rene">
      <SectionContainer>
        <SectionHeading>Kapper René</SectionHeading>
        <p>
          René Slierendrecht is al ruim 35 jaar kapper. Na de kappersschool in
          Den Haag is hij begin jaren ’80 gaan werken bij de in Den Haag
          wereldberoemde kapper Christiaan op de Grote Markt waar hij de fijne
          knipjes van het vak heeft geleerd. Christiaan stond in de jaren ’70
          tot begin van de nieuwe eeuw bekend als een van de beste kappers van
          Den Haag.
        </p>
        <blockquote>
          Tot op de dag van vandaag heb ik er nog steeds profijt van dat ik bij
          Christiaan mijn loopbaan ben begonnen.
        </blockquote>
        <div className="image full-width">
          <Image
            src={coiffeur}
            quality={100}
            layout="responsive"
            alt='Frans uithangbord met "coiffeur"'
            placeholder="blur"
            lazyBoundary="300px"
          />
        </div>
        <p>
          Met name over het knippen en stylen van het haar had Christiaan een
          geheel eigen denkwijze en aanpak ontwikkeld.
        </p>
        <p>
          Met de klant werd eerst uitgebreid bekeken en besproken wat het beste
          zou passen. Daarbij werd uitgegaan van het haar zelf, de slag of krul
          die erin zat, of niet. Niet tegendraads knippen maar kijken naar de
          natuurlijke valling van het haar. Verder werd er gekeken naar de
          vormen en verhoudingen van het gezicht en het hoofd.
        </p>
        <blockquote>
          Het belangrijkste vind ik in ieder geval dat het haar goed zit als je
          het verschillende kanten opgooit en er niet teveel kunst- en vliegwerk
          aan te pas hoeft te komen om het natuurlijk goed te laten vallen. Als
          het dan ook nog lekker lang meegaat, is het helemaal mooi!
        </blockquote>
        <div className="image full-width">
          <Image
            src={stoel}
            quality={100}
            layout="responsive"
            alt="Kappersstoel"
            placeholder="blur"
            lazyBoundary="300px"
          />
        </div>
        <p>
          Na zes jaar bij Christiaan te hebben gewerkt kwam René in 1993 terecht
          bij Haarzuiver in de Piet Heinstraat, de eerste milieuvriendelijke
          kapsalon van Nederland.
        </p>
        <blockquote>
          Alles gebeurt hier op een natuurvriendelijke manier. Bij Haarzuiver
          heb ik geleerd dat je haar kan kleuren met gedroogde planten.
        </blockquote>
        <div className="image full-width">
          <Image
            src={tuin}
            quality={100}
            layout="responsive"
            alt="Deur naar de binnentuin"
            placeholder="blur"
            lazyBoundary="300px"
          />
        </div>
        <p>
          Dit is een kleuring op basis van planten, schors, bessen, takken en
          fruit gedroogd en vermalen tot poeder. Het dringt niet in het haar
          maar legt een laagje om het haar heen, hierdoor wordt elke haar iets
          dikker, krijgt kleur en glans. De kleuren zijn transparant en daarmee
          blijft de eigen haarkleur zichtbaar, alleen heeft deze dan een
          intensere kleur.
        </p>
        <blockquote>
          Dus als je drie kleuren haar hebt, blijf je drie kleuren zien, alleen
          alle drie een stukje intenser. Dit geeft een heel mooi natuurlijk
          effect. Ook grijze haren kunnen worden gekleurd, alleen blijven ze
          lichter. Als ik twee keer achter elkaar ga kleuren kan het haar
          donkerbruin worden. Ik ben nog op zoek naar een manier om dit in één
          keer te doen.
        </blockquote>
        <div className="image full-width">
          <Image
            src={bussen}
            quality={100}
            layout="responsive"
            alt="Beschuitbussen met plantkleuring"
            placeholder="blur"
            lazyBoundary="300px"
          />
        </div>
        <p>
          Na veertien jaar Haarzuiver was het tijd voor een natuurlijke overstap
          en wel die naar een eigen zaak in een geheel eigen ambiance. Een pand
          aan de Weimarstraat diende zich aan en had met de verschillende
          ruimtes de mogelijkheden in zich dat er meerdere mensen zouden kunnen
          werken.
        </p>
        <blockquote>
          Helemaal een plek naar mijn hart. Ik zag meteen de symbiose van mijn
          mooie collectie antiek en interieurspullen in een eigen zaak verwerkt.
          Sinds 2 oktober 2007 is de deur van Huis van Groen niet meer dicht
          geweest. De zaak is alleen maar groeiende en steeds maar leuker aan
          het worden!
        </blockquote>
      </SectionContainer>
    </StyledMain>
  )
}
