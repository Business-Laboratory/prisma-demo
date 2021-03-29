import tw from 'twin.macro'
import { useState } from 'react'
import Router from 'next/router'
import { server } from 'lib/server'
import Link from 'next/link'

const SignUp: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')

  const isDisabled = !name || !email

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (isDisabled) return
    try {
      const body = { name, email, bio }
      // await fetch(`${server}/api/user`, {
      await fetch(`${server}/api/profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main tw="bg-white p-12 flex justify-center" className="page">
      <form onSubmit={submitData}>
        <h1 tw="bl-text-3xl pb-4">Signup user</h1>
        <input
          css={inputCss}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
          value={name}
        />
        <input
          css={inputCss}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="text"
          value={email}
        />
        <textarea
          css={inputCss}
          onChange={(e) => setBio(e.target.value)}
          rows={5}
          placeholder="User bio"
          value={bio}
        />
        <input
          css={[
            tw`px-8 py-4 bg-gray-200 border-none rounded-sm bl-text-base`,
            isDisabled ? tw`text-gray-500` : tw`hover:bg-gray-300`,
          ]}
          disabled={isDisabled}
          type="submit"
          value="Signup"
        />
        <Link href="/" passHref>
          <a tw="ml-4 bl-text-base text-matisse-blue-200 hover:text-matisse-blue-300">
            or Cancel
          </a>
        </Link>
      </form>
    </main>
  )
}

const inputCss = tw`w-full p-2 my-2 border-2 border-black rounded-md bl-text-base border-opacity-20`

export default SignUp
