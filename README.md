# Messing with Prisma

## What is this?
This is just a little demo; a scratchpad app. I wanted to mess around with [prisma](https://www.prisma.io/) using a relational database. I decided to go with a postgress database hosted on Heroku because that is _free_ 🤌🏼
## Getting Started

Add a `.env` file with a `DATABASE_URL` with the URL connection string.

Install the dependencies:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Inspiration/Resources I copied from

[This YouTube video](https://www.youtube.com/watch?v=Bqacj0iOL68&t=964s&ab_channel=LeighHalliday) really helped me get up and running with a real database. All of the prisma examples I've seen have you using a local database, and I believe it's always `sqlite`. I appreciated how to the point this video was while still covering a wide range of tools.

[Fullstack Authentication Example with Next.js and NextAuth.js](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes-auth) – This whole project, at least to start, is pretty much just trying to copy this example and fill in the details the recommend. I also am adjusting some silly TS choices the example developer made (because we need to stop using `React.FC`, also being able to build the bundle would be nice).