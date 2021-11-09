import styled from 'styled-components'
import Button from './Button'

const StyledKapper = styled.article`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.25em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  gap: 1em;

  h4 {
    font-size: ${(props) => props.theme.fontSizes.l};
    font-weight: 700;
    text-align: center;
    padding-bottom: 0.5em;
    border-bottom: 0.125em solid ${(props) => props.theme.colors.primary};
  }

  .hours {
    border-collapse: collapse;
    line-height: 1.6em;

    & tr > td:nth-last-child(1) {
      text-align: right;
    }
  }

  .note {
    font-size: ${(props) => props.theme.fontSizes.s};
    text-align: center;
  }

  .website {
    color: inherit;
    display: block;
    text-align: right;
  }
`

export default function Kapper({
  name,
  workingHours,
  phoneNumber,
  website,
  note
}) {
  const newHref = phoneNumber
    .split('')
    .map((num, index) => ((index === 0) & (num === '0') ? '+31' : num))
    .join('')

  return (
    <StyledKapper>
      <h4>{name}</h4>
      <table className="hours">
        <tbody>
          {workingHours.map((item, i) => (
            <tr key={i}>
              <td>{item.day}</td>
              <td>{item.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {note && <div className="note">{note}</div>}
      {website && (
        <a className="website" href={website} rel="noopener" target="_blank">
          Website {name} &#8594;
        </a>
      )}
      <Button href={`tel:${newHref}`}>{phoneNumber}</Button>
    </StyledKapper>
  )
}
