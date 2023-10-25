import UrqlClient from '../../infra/database/urql';

async function getPaginatedMedia(variables, db = UrqlClient) {
  // client should send this query
  const query = `
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
  `;

  const result = await db.query(query, variables).toPromise();

  return result.data;
};

export default {
  getPaginatedMedia
};