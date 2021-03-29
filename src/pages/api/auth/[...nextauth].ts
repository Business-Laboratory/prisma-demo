import NextAuth from 'next-auth'
import Adapters from 'next-auth/adapters'
import Providers from 'next-auth/providers'
import prisma from 'lib/prisma'

const { GITHUB_ID, GITHUB_SECRET } = process.env
if (!GITHUB_ID || !GITHUB_SECRET) {
  throw new Error(`GITHUB auth not correctly setup, no secrets found`)
}

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    Providers.AzureADB2C({
      clientId: process.env.AZURE_CLIENT_ID ?? '',
      clientSecret: process.env.AZURE_CLIENT_SECRET ?? '',
      scope: 'offline_access User.Read',
      tenantId: process.env.AZURE_TENANT_ID,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
})
