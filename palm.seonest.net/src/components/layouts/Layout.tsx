import { styled } from '@/stitches/config'
import globalStyles from '@/stitches/globlStyles'

type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  globalStyles()

  return <LayoutBox>{children}</LayoutBox>
}

const LayoutBox = styled('div', {})

export default Layout
