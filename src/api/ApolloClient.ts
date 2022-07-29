import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { useApolloClient, provideApolloClient } from '@vue/apollo-composable'
import fetch from 'isomorphic-unfetch'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://graphql.anilist.co/',
  fetch
})

// Cache implementation
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

provideApolloClient(apolloClient)
const { client } = useApolloClient()

export default client