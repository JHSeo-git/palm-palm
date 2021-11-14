import { globalCss } from '@/stitches/config'
import type { PageProps } from 'gatsby'
import type { OverrideProps } from '../lib/types'
import BaseLayout from './BaseLayout'

type LayoutProps = OverrideProps<
  PageProps<{}>,
  {
    children: React.ReactNode
  }
>

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  'html, body': {
    m: 0,
    color: '$hiContrast',
    bc: '$loContrast',
    fontFamily: '$base',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',
    wordBreak: 'break-word',
  },
})

function Layout({ data, children }: LayoutProps) {
  globalStyles()

  return <BaseLayout>{children}</BaseLayout>
}

export default Layout
