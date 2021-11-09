import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1em 2em;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.25em;
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: 900;
  letter-spacing: 0.15em;
  text-align: center;
  transition: transform 300ms ease;

  &:hover {
    transform: scale(103%) translateY(-3%);
  }
`

export default Button
