import tw from 'twin.macro'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  const isActive = (pathname: string) => router.pathname === pathname

  return (
    <nav tw="flex p-8 items-center justify-between">
      <div tw="space-x-4">
        <Link href="/">
          <a
            css={[
              linkCss,
              tw`font-bold`,
              isActive('/') ? tw`text-gray-500` : null,
            ]}
          >
            Blog
          </a>
        </Link>
        <Link href="/drafts">
          <a css={[linkCss, isActive('/drafts') ? tw`text-gray-500` : null]}>
            Drafts
          </a>
        </Link>
      </div>
      <div tw="space-x-4">
        <Link href="/signup">
          <a css={[linkCss, linkButtonCss]}>Signup</a>
        </Link>
        <Link href="/create">
          <a css={[linkCss, linkButtonCss]}>+ Create draft</a>
        </Link>
      </div>
    </nav>
  )
}

const linkCss = tw`inline-block text-black no-underline cursor-pointer`
const linkButtonCss = tw`px-4 py-2 border border-black rounded-sm`

export default Header
