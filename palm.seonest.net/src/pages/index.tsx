import Button from '@/components/Button'
import Card from '@/components/Card'
import { styled } from '@/stitches/config'
import type { PageProps } from 'gatsby'
import { useState } from 'react'

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
        {Array.from({ length: 20 }).map((_, i) => (
          <Card key={i} variant="full" shadow>
            Card {i + 1}
          </Card>
        ))}
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
