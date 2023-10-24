import gql from 'graphql-tag'
import client from './ApolloClient'
import type { QueryVariables } from '@/types';

function queryPaginatedMedia(variables: QueryVariables) {
  const query = gql`
    query getPaginatedMedia ($page: Int, $perPage: Int, $search: String, $type: MediaType) {
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
          }
          coverImage {
            large
          }
        }
      }
    }
  `
  return client.query({ query, variables })
}

function queryMediaById(variables: QueryVariables) {
  const query = gql`
    query getMediaById ($id: Int) {
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
                full
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