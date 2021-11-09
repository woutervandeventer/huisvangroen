import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'

const StyledLink = styled.a`
  position: relative;
  cursor: pointer;
  text-transform: lowercase;
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: 700;
  padding: 1em;
  letter-spacing: 0.1em;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.125em;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 0.125em;
    transform: scaleX(0);
    transition: transform 250ms ease-out;
  }

  &:hover::after {
    transform: scaleX(100%);
  }

  @media (${(props) => props.theme.media.m}) {
    padding: 0.5em;
  }
`

export default function NavLink({ children, page, section, setOpen }) {
  const router = useRouter()

  const handleClick = async () => {
    if (router.pathname !== page) {
      await router.push(page)
      document.querySelector(section).scrollIntoView()
    } else {
      document.querySelector(section).scrollIntoView({ behavior: 'smooth' })
    }

    setOpen(false)
  }

  return <StyledLink onClick={handleClick}>{children}</StyledLink>
}
