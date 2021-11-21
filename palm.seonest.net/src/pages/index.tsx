import type { PageProps } from 'gatsby'
import { styled } from '@/stitches/config'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import Container from '@/components/common/Container'

type IndexPageProps = PageProps<{}>

function IndexPage({ data }: IndexPageProps) {
  return (
    <Container
      css={{
        pt: '$4',
      }}
    >
      <FlexBox>
        <Card shadow>
          <h1>Hello</h1>
        </Card>
        <Card shadow>
          <h1>World</h1>
        </Card>
        <Card shadow>
          <h1>Bye</h1>
        </Card>
        <Card shadow>
          <h1>Newwork</h1>
        </Card>
        <Card shadow>
          <h1>See</h1>
        </Card>
        <Card shadow>
          <h1>You</h1>
        </Card>
        <Card shadow>
          <h1>Soon</h1>
        </Card>
      </FlexBox>
      <GridBox css={{ mt: '$8' }}>
        <Card shadow>
          <h1>Hello</h1>
        </Card>
        <Card shadow>
          <h1>World</h1>
        </Card>
        <Card shadow>
          <h1>Bye</h1>
        </Card>
        <Card shadow>
          <h1>Newwork</h1>
        </Card>
        <Card shadow>
          <h1>See</h1>
        </Card>
        <Card shadow>
          <h1>You</h1>
        </Card>
        <Card shadow>
          <h1>Soon</h1>
        </Card>
      </GridBox>
      <FlexBox css={{ mt: '$8' }}>
        <Button css={{ width: '100%' }} variant="greenScale">
          Perfect!!
        </Button>
      </FlexBox>
    </Container>
  )
}

const FlexBox = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$4',
})

const GridBox = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '$4',
})

export default IndexPage
