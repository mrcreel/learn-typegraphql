import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import { TeamResolver } from './resolvers/TeamResolver'

async function main() {
  const connection = await createConnection()
  const schema = await buildSchema({
    resolvers: [TeamResolver],
  })
  const server = new ApolloServer({ schema })
  const PORT = 4000
  await server.listen(PORT)
  console.log('Server has started.')
  console.log(`Listening on http://localhost:${PORT}`)
}

main()
