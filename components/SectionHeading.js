import styled from 'styled-components'

const StyledHeading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding-top: 2em;
`

export default function SectionHeading({ children }) {
  return <StyledHeading className="wide">{children}</StyledHeading>
}
