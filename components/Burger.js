import styled from 'styled-components'

const StyledBurger = styled.div`
  position: fixed;
  z-index: 200;
  top: 0.5em;
  right: 0.5em;
  width: 4em;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.secondary + '99'};
  border-radius: 50%;

  div,
  div::before,
  div::after {
    width: 2.3em;
    height: 0.3em;
    border-radius: 0.4em;
    background: ${(props) => props.theme.colors.white};
    transition: all 300ms ease;
  }

  div {
    background: ${({ open }) => open && 'transparent'};
    transform: ${({ open }) => open && 'translateX(-50%)'};
  }

  div::before,
  div::after {
    position: absolute;
    content: '';
  }

  div {
    &::before {
      transform: ${({ open }) =>
        open
          ? 'translate(50%, 0) rotate(45deg)'
          : 'translateY(-200%) rotate(0)'};
    }

    &::after {
      transform: ${({ open }) =>
        open
          ? 'translate(50%, 0) rotate(-45deg)'
          : 'translateY(200%) rotate(0)'};
    }
  }

  @media (${(props) => props.theme.media.m}) {
    display: none;
  }
`

export default function Burger({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div></div>
    </StyledBurger>
  )
}
