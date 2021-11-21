import type { PageProps } from 'gatsby'
import HelloWorld from '../components/HelloWorld'

type IndexPageProps = PageProps<{}>

function IndexPage({ data }: IndexPageProps) {
  return (
    <div>
      <HelloWorld content="Hello World!!" />
    </div>
  )
}

export default IndexPage
