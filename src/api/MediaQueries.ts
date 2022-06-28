import gql from 'graphql-tag'
import { useApolloClient, provideApolloClient } from '@vue/apollo-composable'
import ApolloClient from './ApolloClient'

provideApolloClient(ApolloClient)
const { client } = useApolloClient()

interface queryVariables {
  id?: number
  search?: string
  page?: number
  perPage?: number
  type?: string
}

function queryPaginatedMedia(variables: queryVariables) {
  const query = gql`
    query getAnimes ($page: Int, $perPage: Int, $search: String, $type: MediaType) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (search: $search, type: $type) {
          id
          title {
            romaji
            native
          }
          coverImage {
            extraLarge
            large
            medium
          }
        }
      }
    }
  `
  return client.query({ query, variables })
}

function queryMediaById(variables: queryVariables) {
  const query = gql`
    query getAnime ($id: Int) {
      Media (id: $id) {
        id
        characters (sort: ROLE, page: 1, perPage: 10) {
          edges {
            node {
              image {
                large
              }
              name {
                full
              }
            }
            voiceActors (language: JAPANESE) {
              id
              name {
                first
                last
              }
              image {
                large
              }
            }
          }
        }
      }
    }
  `
  return client.query({ query, variables })
}

export { queryPaginatedMedia, queryMediaById }