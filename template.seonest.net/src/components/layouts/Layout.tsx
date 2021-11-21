import { styled } from '@/stitches/config'

type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return <LayoutBox>{children}</LayoutBox>
}

const LayoutBox = styled('div', {})

export default Layout
