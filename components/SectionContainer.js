import styled from 'styled-components'

const SectionContainer = styled.section`
  display: grid;
  grid-template-columns:
    minmax(5%, 1fr) minmax(min-content, 56ch)
    minmax(5%, 1fr);

  & > * {
    grid-column: 2 / -2;

    & + * {
      margin-top: 2em;
    }

    &.full-width {
      grid-column: 1 / -1;
    }
  }

  @media (${(props) => props.theme.media.m}) {
    grid-template-columns:
      minmax(15%, 1fr) minmax(min-content, 30ch) 27ch 27ch
      minmax(min-content, 30ch) minmax(15%, 1fr);

    & > * {
      grid-column: 3 / -3;

      & + * {
        margin-top: 3em;
      }

      &.wide {
        grid-column: 2 / -2;
      }

      &.full-width {
        grid-column: 2 / -2;
      }
    }
  }
  /* 
  @media (${(props) => props.theme.media.l}) {
    grid-template-columns: 1fr minmax(8fr, 55ch) 1fr;

    & > * {
      grid-column: 2 / -2;

      & + * {
        margin-top: 2em;
      }

      &.full-width {
        grid-column: 2 / -2;
      }
    }
  } */
`

export default SectionContainer
