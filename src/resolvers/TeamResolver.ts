import { Resolver, Query } from 'type-graphql'

@Resolver()
export class TeamResolver {
  @Query(() => String)
  hello() {
    return 'Hello World!'
  }
}
