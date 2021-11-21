import type { PageProps } from 'gatsby'

type HelloWorldProps = {
  content?: string
}

function HelloWorld({ content = 'Hello World!!' }: HelloWorldProps) {
  return <div>{content}</div>
}

export default HelloWorld
