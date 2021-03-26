import { css } from 'twin.macro'
import ReactMarkdown from 'react-markdown'
import type { ReactMarkdownProps } from 'react-markdown'

function Markdown(props: ReactMarkdownProps) {
  return (
    <ReactMarkdown
      // css={css`
      //   h1 {
      //     color: blue;
      //   }
      // `}
      {...props}
    />
  )
}

export default Markdown
