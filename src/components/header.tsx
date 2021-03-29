import Link from 'next/link'
import tw from 'twin.macro'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'

function Header() {
  const router = useRouter()
  const isActive = (pathname: string) => router.pathname === pathname

  const [session] = useSession()

  console.log(session?.user.email)

  return (
    <nav tw="flex p-8 items-center justify-between">
      <div tw="space-x-4">
        <Link href="/" passHref>
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
        <Link href="/drafts" passHref>
          <a css={[linkCss, isActive('/drafts') ? tw`text-gray-500` : null]}>
            Drafts
          </a>
        </Link>
      </div>
      <div tw="space-x-4">
        {session ? (
          <>
            <Link href="/create" passHref>
              <a css={[linkCss, linkButtonCss]}>+ Create draft</a>
            </Link>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <button onClick={() => signIn('azure-ad-b2c')}>Sign in</button>
        )}
      </div>
    </nav>
  )
}

const linkCss = tw`inline-block text-black no-underline cursor-pointer`
const linkButtonCss = tw`px-4 py-2 border border-black rounded-sm`

export default Header
