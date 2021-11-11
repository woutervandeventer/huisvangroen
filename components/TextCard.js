import Image from 'next/image'
import styled from 'styled-components'

const StyledTextCard = styled.article`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  border-radius: 0.25em;

  .text {
    padding: 4em 1em;

    p {
      max-width: 44ch;
      margin: 0 auto;
      padding-left: 0.5em;
      border-left: 0.25em solid ${(props) => props.theme.colors.accent};
    }
  }

  @media (min-width: 35em) {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-flow: dense;
    align-items: center;

    .text {
      padding: 0 1em;
      grid-column: ${({ flipped }) => (flipped ? '4 / span 4' : 'span 4')};
      margin: 1em;
    }

    .image {
      grid-column: ${({ flipped }) => (flipped ? '1 / span 3' : 'span 3')};
    }
  }
`

export default function TextCard({ children, src, flipped, alt }) {
  return (
    <StyledTextCard flipped={flipped}>
      <div className="text">{children}</div>
      <picture className="image">
        <Image
          src={src}
          layout="responsive"
          quality={100}
          alt={alt || 'Foto'}
          placeholder="blur"
          lazyBoundary="300px"
        />
      </picture>
    </StyledTextCard>
  )
}
