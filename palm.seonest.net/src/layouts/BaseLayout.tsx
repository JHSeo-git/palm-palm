import { styled } from '@/stitches/config'

type BaseLayoutProps = {
  children: React.ReactNode
}

function BaseLayout({ children }: BaseLayoutProps) {
  return <LayoutBox>{children}</LayoutBox>
}

const LayoutBox = styled('div', {})

export default BaseLayout
