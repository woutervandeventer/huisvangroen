import styled from 'styled-components'
import SectionContainer from '../components/SectionContainer'
import SectionHeading from '../components/SectionHeading'

const StyledMain = styled.main`
  background-color: ${(props) => props.theme.colors.primary};
  padding-bottom: 3em;
  min-height: 100vh;
`

export default function Rene() {
  return (
    <StyledMain id="vacature">
      <SectionContainer>
        <SectionHeading>Vacature</SectionHeading>
        <p>
          Bij Huis van Groen hebben we altijd plek voor kappers die zelfstandig
          willen werken. Dat betekent dat je met ons in de zaak werkt, maar wel
          als zelfstandige kapper.
        </p>
        <p>
          Het is wenselijk dat je een aantal jaar ervaring hebt, en dat je
          daarmee een eigen klantenkring hebt opgebouwd. Die is uiteraard welkom
          om mee te verhuizen! We begeleiden jou en je klanten graag om meer te
          leren over plantenkleuring en de natuurvriendelijke producten die wij
          gebruiken.
        </p>
        <p>
          We zijn flexibel in onze werktijden en -dagen, of je nu fulltime,
          parttime, 's ochtend of 's avonds wilt werken. Je betaalt een
          all-inclusive bedrag voor o.a. de huur per maand. Wil je meer weten,
          neem dan graag contact met ons op.
        </p>
      </SectionContainer>
    </StyledMain>
  )
}
