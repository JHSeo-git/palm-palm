import { globalCss } from './config'

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    m: 0,
    fontFamily: '$base',
    color: '$hiContrast',
    bc: '$loContrast',
    wordBreak: 'break-word',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',
  },
})

export default globalStyles
