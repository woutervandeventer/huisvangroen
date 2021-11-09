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
      <div>
        &copy; {new Date().getFullYear().toString()}{' '}
        <a
          href="https://woutervandeventer.com/"
          rel="noopener"
          rel="noopener"
          target="_blank"
        >
          Wouter van Deventer
        </a>
      </div>
    </StyledFooter>
  )
}
