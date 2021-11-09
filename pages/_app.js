import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import '../public/fonts/fonts.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html {
  /* scroll-behavior: smooth; */
}

  body {
    font-family: 'Lato', sans-serif;
    font-size: ${(props) => props.theme.fontSizes.m};
    color: ${(props) => props.theme.colors.text};
  }

  p, blockquote {
    line-height: 1.6em;
  }

  .bold {
    font-weight: bolder;
  }

  ul {
    list-style: none;
  }

  @media (${(props) => props.theme.media.m}) {
    html {
      scroll-padding-top: ${(props) => props.theme.navHeight};
    }
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Huis van Groen</title>
        <meta
          name="description"
          content="Huis van Groen is een natuurvriendelijke kapperszaak met zelfstandige groene kappers, gevestigd aan de Weimarstraat in Den Haag sinds 2007."
        />
        <link rel="icon" href="/images/scissors.svg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}
