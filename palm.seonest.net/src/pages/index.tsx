import React from 'react'
import type { PageProps } from 'gatsby'

type IndexPageProps = PageProps<{}>

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return <div>Hello Gatsby!!</div>
}

export default IndexPage
