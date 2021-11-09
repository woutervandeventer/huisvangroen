const typeScale = 1.25

const sizes = {
  s: typeScale ** -1,
  m: 1,
  l: typeScale ** 1,
  xl: typeScale ** 2,
  xxl: typeScale ** 3,
  xxxl: typeScale ** 4
}

const theme = {
  colors: {
    primary: '#eee3d8',
    secondary: '#b9926b',
    accent: '#23929c',
    text: '#363636',
    white: '#ffffff'
  },
  media: {
    m: 'min-width: 768px',
    l: 'min-width: 1024px'
  },
  fontSizes: {
    s: `${sizes.s}rem; font-size: clamp(${sizes.s}rem, ${1.25 * sizes.s}vw, ${
      1.25 * sizes.s
    }rem)`,
    m: `${sizes.m}rem; font-size: clamp(${sizes.m}rem, ${1.25 * sizes.m}vw, ${
      1.25 * sizes.m
    }rem)`,
    l: `${sizes.l}rem; font-size: clamp(${sizes.l}rem, ${1.25 * sizes.l}vw, ${
      1.25 * sizes.l
    }rem)`,
    xl: `${sizes.xl}rem; font-size: clamp(${sizes.xl}rem, ${
      1.25 * sizes.xl
    }vw, ${1.25 * sizes.xl}rem)`,
    xxl: `${sizes.xxl}rem; font-size: clamp(${sizes.xxl}rem, ${
      1.25 * sizes.xxl
    }vw, ${1.25 * sizes.xxl}rem)`,
    xxxl: `${sizes.xxxl}rem; font-size: clamp(${sizes.xxxl}rem, ${
      1.25 * sizes.xxxl
    }vw, ${1.25 * sizes.xxxl}rem)`
  },
  navHeight: '5rem'
}

export default theme
