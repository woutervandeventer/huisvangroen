import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'

const StyledLogo = styled.a`
  display: none;

  @media (${(props) => props.theme.media.m}) {
    cursor: pointer;

    display: inline-block;
    padding: 0.5em;
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};

    span {
      display: block;
      line-height: 1em;
    }

    .brand {
      text-transform: uppercase;
      font-size: ${(props) => props.theme.fontSizes.l};
      font-weight: 900;
    }

    .subtitle {
      text-transform: lowercase;
      font-size: ${(props) => props.theme.fontSizes.l};
      font-weight: 400;
      letter-spacing: 0.02em;
    }
  }
`

export default function Logo() {
  const router = useRouter()

  const handleClick = (e) => {
    router.pathname !== '/'
      ? router.push('/')
      : document.querySelector('#home').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <StyledLogo onClick={handleClick}>
      <span className="brand">Huis van Groen</span>
      <span className="subtitle">Natuurlijke kapper</span>
    </StyledLogo>
  )
}
