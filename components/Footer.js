import styled from 'styled-components'

const StyledFooter = styled.footer`
  text-align: center;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  padding: 2em;

  a {
    color: inherit;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      {`\u00A9 ${new Date().getFullYear().toString()} website by `}
      <a href="https://woutervandeventer.com/" target="_blank" rel="noreferrer">
        Wouter van Deventer
      </a>
    </StyledFooter>
  )
}
