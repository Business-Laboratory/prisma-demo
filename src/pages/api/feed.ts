import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { getProviders, getSession } from 'next-auth/client'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  console.log(session)
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  })
  res.json(posts)
}
