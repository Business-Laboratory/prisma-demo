import tw from 'twin.macro'
import { GetServerSideProps } from 'next'
import Router from 'next/router'
import Markdown from '@/components/markdown'
import type { PostProps } from '@/components/post'
import { server } from 'lib/server'

function Post({ id, title, published, author, content }: PostProps) {
  return (
    <main>
      <h2>{published ? title : `${title} (Draft)`}</h2>
      <p>By {author?.name || 'Unknown author'}</p>
      <Markdown source={content} />
      <div tw="space-x-4 mt-8">
        {!published ? (
          <button css={buttonCss} onClick={() => publish(id)}>
            Publish
          </button>
        ) : null}
        <button css={buttonCss} onClick={() => destroy(id)}>
          Delete
        </button>
      </div>
    </main>
  )
}
export default Post

const buttonCss = tw`px-8 py-4 bg-gray-200 border-none rounded-sm bl-text-base hover:bg-gray-300`

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (typeof id !== 'string') {
    throw new Error(`Multiple ids were given, only one is allowed: ${id}`)
  }
  const res = await fetch(`${server}/api/post/${id}`)
  const data = await res.json()
  return { props: { ...data } }
}

async function publish(id: number) {
  await fetch(`${server}/api/publish/${id}`, {
    method: 'PUT',
  })
  Router.push('/')
}

async function destroy(id: number) {
  await fetch(`${server}/api/post/${id}`, {
    method: 'DELETE',
  })
  Router.push('/drafts')
}
