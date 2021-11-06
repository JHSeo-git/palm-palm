import React from 'react'
import { getCssText } from '@/stitches/config'
import type { RenderBodyArgs } from 'gatsby'

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    <style
      id="stitches"
      key="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ])
}
