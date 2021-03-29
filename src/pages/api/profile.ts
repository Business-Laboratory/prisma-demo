import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      const { name, email, bio } = req.body
      if (!name) {
        res.status(400).json({
          error: 'name is required ',
        })
        break
      } else if (!email) {
        res.status(400).json({
          error: 'name is required ',
        })
        break
      }

      try {
        const user = await prisma.user.create({
          data: {
            email,
            name,
            Profile: {
              create: {
                bio: bio ?? undefined,
              },
            },
          },
        })
        res.status(201).json(user)
      } catch (error) {
        res.status(500).json({
          error,
        })
      }
      break
    }
    case 'GET': {
      break
    }
    case 'PUT': {
      break
    }
  }
}
