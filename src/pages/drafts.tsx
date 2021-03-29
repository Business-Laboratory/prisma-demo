import 'twin.macro'
import { GetServerSideProps } from 'next'
import Post from '@/components/post'
import { server } from '../lib/server'
import type { PostProps } from '@/components/post'

type DraftsProps = {
  drafts: PostProps[]
}

function Drafts({ drafts }: DraftsProps) {
  return (
    <main>
      <h1 tw="bl-text-3xl">Drafts</h1>
      <main tw="space-y-8">
        {drafts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </main>
    </main>
  )
}

export default Drafts

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${server}/api/drafts`)
  const drafts = await res.json()
  return {
    props: { drafts },
  }
}
