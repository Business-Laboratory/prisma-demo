import 'twin.macro'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export type PostProps = {
  id: number
  title: string
  author: {
    name: string
  }
  content: string
  published: boolean
}

function Post({ id, author, title, content }: PostProps) {
  const authorName = author ? author.name : 'Unknown author'
  return (
    <Link href={`/p/${id}`}>
      <a tw="block p-8 text-black cursor-pointer w-full border border-black">
        <h2>{title}</h2>
        <small>By {authorName}</small>
        <ReactMarkdown source={content} />
      </a>
    </Link>
  )
}

export default Post
