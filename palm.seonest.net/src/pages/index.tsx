import type { PageProps } from 'gatsby'

type IndexPageProps = PageProps<{}>

function IndexPage({ data }: IndexPageProps) {
  return <div>Hello Gatsby!!</div>
}

export default IndexPage
