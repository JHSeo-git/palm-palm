import React from 'react'
import Layout from '@/components/layouts/Layout'

// FIXME:
// GatsbySSR['wrapPageElement'] | GatsbyBrowser['wrapPageElement']
// { element } type is different
export const wrapPageElement = ({ element }: { element: any }) => {
  return <Layout>{element}</Layout>
}
