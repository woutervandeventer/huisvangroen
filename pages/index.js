import styled from 'styled-components'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'

const StyledHome = styled.main`
  background-color: ${(props) => props.theme.colors.primary};
`

export default function Home() {
  return (
    <StyledHome>
      <Hero />
      <About />
      <Contact />
    </StyledHome>
  )
}
