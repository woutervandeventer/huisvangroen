import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 0.5em;
    font-size: ${(props) => props.theme.fontSizes.l};
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`

export default function IconHeader({ src, text }) {
  return (
    <StyledHeader>
      <img src={src} alt="Icon" width="32" height="32" />
      <h3>{text}</h3>
    </StyledHeader>
  )
}
