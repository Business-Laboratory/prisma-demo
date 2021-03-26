import tw from 'twin.macro'
import { useState } from 'react'
import Router from 'next/router'
import { server } from 'lib/server'
import Link from 'next/link'

function CreateDraft() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [authorEmail, setAuthorEmail] = useState('')

  const isDisabled = !content || !title || !authorEmail
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (isDisabled) return
    try {
      const body = { title, content, authorEmail }
      await fetch(`${server}/api/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/drafts')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main>
      <form onSubmit={submitData}>
        <h1>Create Draft</h1>
        <input
          css={inputCss}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <input
          css={inputCss}
          onChange={(e) => setAuthorEmail(e.target.value)}
          placeholder="Author (email address)"
          type="text"
          value={authorEmail}
        />
        <textarea
          css={inputCss}
          cols={50}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={8}
          value={content}
        />
        <input
          css={[
            tw`px-8 py-4 bg-gray-200 border-none rounded-sm bl-text-base hover:bg-gray-300`,
            isDisabled ? tw`text-gray-500` : null,
          ]}
          disabled={isDisabled}
          type="submit"
          value="Create"
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

const inputCss = tw`w-full p-2 mt-2 border-2 border-black rounded-md bl-text-base border-opacity-20`

export default CreateDraft
