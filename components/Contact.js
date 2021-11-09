import Image from 'next/image'
import styled from 'styled-components'
import Kapper from './Kapper'
import SectionHeading from './SectionHeading'
import SectionContainer from './SectionContainer'
import IconHeader from './IconHeader'
import gevel from '../public/images/gevel.jpeg'

const StyledContact = styled(SectionContainer)`
  grid-area: contact;
  background-color: ${(props) => props.theme.colors.white};
  margin-top: 3em;

  & > section > * + * {
    margin-top: 1em;
  }

  .openingstijden {
    justify-self: center;
    line-height: 1.6em;

    table {
      width: 100%;
      border-collapse: collapse;

      tr > td:nth-last-child(1) {
        text-align: right;
      }
    }
  }

  .adres {
    line-height: 1.4em;

    justify-self: center;

    address {
      font-style: normal;

      a {
        color: inherit;
      }
    }
  }

  .kappers > *:first-child {
    justify-content: center;
  }

  .kappers-list {
    margin-top: 1.5em;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    grid-auto-rows: 1fr;
    gap: 2em;
  }

  @media (${(props) => props.theme.media.l}) {
    padding-bottom: 3em;

    .adres {
      grid-column: 2 / span 2;
    }

    .openingstijden {
      grid-column: 2 / span 2;
    }

    figure.gevel {
      grid-column: 4 / span 2;
      grid-row: 2 / span 2;
      align-self: center;
      border-radius: 0.25em;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
  }
`

export default function Contact() {
  return (
    <StyledContact id="contact">
      <SectionHeading>Contact</SectionHeading>
      <section className="adres">
        <IconHeader src="/images/home.svg" text="Adres" />
        <address>
          Huis van Groen
          <br />
          <a
            href="https://goo.gl/maps/QpGvkXfDMdx91jN96"
            rel="noopener"
            target="_blank"
          >
            Weimarstraat 42A &#8594;
          </a>
          <br />
          2562 GZ Den Haag
          <br />
          <a href="tel:+31 70 365 6917">070 365 6917</a>
          <br />
        </address>
      </section>
      <section className="openingstijden">
        <IconHeader src="/images/calendar.svg" text="Openingstijden" />
        <table>
          <tbody>
            <tr>
              <td>Maandag</td>
              <td>9:00-20:00</td>
            </tr>
            <tr>
              <td>Dinsdag</td>
              <td>8:00-20:00</td>
            </tr>
            <tr>
              <td>Woensdag</td>
              <td>8:00-13:00</td>
            </tr>
            <tr>
              <td>Donderdag</td>
              <td>8:00-19:00</td>
            </tr>
            <tr>
              <td>Vrijdag</td>
              <td>9:00-20:00</td>
            </tr>
            <tr>
              <td>Zaterdag</td>
              <td>9:00-20:00</td>
            </tr>
            <tr>
              <td>Zondag</td>
              <td>9:00-20:00</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="kappers wide">
        <IconHeader src="/images/scissors.svg" text="Kappers" />
        <div className="kappers-list">
          <Kapper
            name="René"
            workingHours={[
              { day: 'Maandag', hours: '14:00-20:00' },
              { day: 'Dinsdag', hours: '14:00-20:00' },
              { day: 'Vrijdag', hours: '9:00-20:00' },
              { day: 'Zaterdag', hours: '9:00-20:00' },
              { day: 'Zondag', hours: '10:00-20:00' }
            ]}
            phoneNumber="06 52 75 82 75"
          />
          <Kapper
            name="Christine"
            workingHours={[
              { day: 'Maandag', hours: '9:00-18:00' },
              { day: 'Donderdag', hours: '9:00-18:00' },
              { day: 'Vrijdag', hours: '9:00-18:00' }
            ]}
            phoneNumber="06 22 83 80 22"
            website="http://www.christine-kapper-denhaag.nl/"
          />
          <Kapper
            name="Delia"
            workingHours={[
              { day: 'Woensdag', hours: '10:00-19:00' },
              { day: 'Zaterdag', hours: '10:00-19:00' }
            ]}
            phoneNumber="06 55 33 66 66"
            website="https://www.natuurlijkehaarkleuring.nl/"
          />
          <Kapper
            name="Hugo"
            workingHours={[{ day: 'Woensdag', hours: '10:00-14:00' }]}
            phoneNumber="06 18 39 20 42"
            website="http://www.kapper-denhaag-hugochristiaan.nl/"
            note="(Bij voorkeur sms'en of whatsappen)"
          />
        </div>
      </section>
      <figure className="full-width gevel">
        <Image
          src={gevel}
          layout="responsive"
          quality={100}
          alt="Voorgevel van Huis van Groen aan de Weimarstraat"
        />
      </figure>
    </StyledContact>
  )
}
