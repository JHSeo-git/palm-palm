import React from 'react'
import type { PageProps } from 'gatsby'

type NotFoundPageProps = PageProps<{}>

const NotFoundPage: React.FC<NotFoundPageProps> = ({ data }) => {
  return <div>NotFoundPage</div>
}

export default NotFoundPage
