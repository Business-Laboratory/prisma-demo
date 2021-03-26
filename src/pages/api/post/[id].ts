import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id

  if (Array.isArray(postId)) {
    throw new Error(`Multiple ids were given, only one is allowed: ${postId}`)
  }

  switch (req.method) {
    // GET /api/post/:id
    case 'GET': {
      const post = await prisma.post.findUnique({
        where: { id: Number(postId) },
        include: { author: true },
      })

      res.json(post)
      break
    }
    // DELETE /api/post/:id
    case 'DELETE': {
      const post = await prisma.post.delete({
        where: { id: Number(postId) },
      })
      res.json(post)
      break
    }

    default: {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      )
    }
  }
}
