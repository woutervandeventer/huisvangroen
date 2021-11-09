import { useState } from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import Nav from './Nav'

const StyledHeader = styled.header`
  @media (${(props) => props.theme.media.m}) {
    position: sticky;
    z-index: 100;
    top: 0;
    background-color: ${(props) => props.theme.colors.white};
    height: ${(props) => props.theme.navHeight};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <StyledHeader>
      <Nav open={open} setOpen={setOpen} />
      <Burger open={open} setOpen={setOpen} />
    </StyledHeader>
  )
}
