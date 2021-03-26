import 'twin.macro'
import { GetServerSideProps } from 'next'
import Layout from '@/components/layout'
import Post from '@/components/post'
import type { PostProps } from '@/components/post'
import { server } from 'lib/server'

type BlogProps = {
  feed: PostProps[]
}
function Blog(props: BlogProps) {
  return (
    <Layout>
      <div tw="pt-6">
        <h1 tw="bl-text-3xl font-bold">My Blog</h1>
        <main tw="mt-4">
          {props.feed.map((post) => (
            <div key={post.id} tw="bg-white transition-shadow hover:shadow-md">
              <Post {...post} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  )
}

export default Blog

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/feed`)
  const feed = await res.json()
  return {
    props: { feed },
  }
}
