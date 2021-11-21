import { useState } from 'react'
import type { PageProps } from 'gatsby'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { styled } from '@/stitches/config'

type IndexPageProps = PageProps<{}>
type ButtonVariants = React.ComponentProps<typeof Button>['variant']

function IndexPage({ data }: IndexPageProps) {
  const [variant, setVariant] = useState<ButtonVariants>('blueScale')
  const onClick = () => {
    setVariant('redScale')
  }
  return (
    <Container>
      <Panel>
        <Card variant="full" shadow>
          Card
        </Card>
        <Button variant={variant} onClick={onClick}>
          Button
        </Button>
      </Panel>
    </Container>
  )
}

const Container = styled('div', {
  position: 'absolute',
  inset: 0,

  overflowY: 'auto',
})

const Panel = styled('section', {
  maxWidth: '$maxWidth',
  width: '100%',
  bc: '$loContrast',
  m: '0 auto',

  p: '$4',

  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
})

export default IndexPage
