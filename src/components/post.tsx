import 'twin.macro'
import Link from 'next/link'
import Markdown from './markdown'

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
      <a tw="block p-8 text-black cursor-pointer w-full">
        <h2 tw="bl-text-2xl">{title}</h2>
        <small tw="bl-text-xs">By {authorName}</small>

        <Markdown source={content} />
      </a>
    </Link>
  )
}

export default Post
