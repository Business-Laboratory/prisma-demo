import 'twin.macro'
import { GetServerSideProps } from 'next'
import Layout from '@/components/layout'
import Post from '@/components/post'
import type { PostProps } from '@/components/post'

type BlogProps = {
  feed: PostProps[]
}
function Blog(props: BlogProps) {
  return (
    <Layout>
      <div tw="m-8">
        <h1 tw="text-3xl font-bold">My Blog</h1>
        <main tw="mt-4">
          {props.feed.map((post) => (
            <div key={post.id}>
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
  const feed = [
    {
      id: 0,
      title: 'Fake title',
      author: {
        name: 'Brooks',
      },
      content: '# Hi!',
      published: true,
    },
  ]
  return {
    props: { feed },
  }
}
