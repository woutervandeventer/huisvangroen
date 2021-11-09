import styled from 'styled-components'
import Logo from './Logo'
import NavLink from './NavLink'

const StyledNav = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.white};
  transform: ${({ open }) => !open && 'translateX(100%)'};
  transition: transform 300ms ease;

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (${(props) => props.theme.media.m}) {
    position: static;
    height: 100%;
    background-color: transparent;
    transform: translateX(0);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 5%;

    ul {
      flex-direction: row;

      & > li:first-child {
        display: none;
      }
    }
  }
`

export default function Nav({ open, setOpen }) {
  return (
    <StyledNav open={open}>
      <Logo />
      <ul>
        <li>
          <NavLink page="/" section="#home" setOpen={setOpen}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink page="/" section="#over-ons" setOpen={setOpen}>
            Over ons
          </NavLink>
        </li>
        <li>
          <NavLink page="/" section="#contact" setOpen={setOpen}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink page="/rene" section="#rene" setOpen={setOpen}>
            Kapper René
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  )
}
