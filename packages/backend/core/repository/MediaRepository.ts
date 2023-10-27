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

async function getMediaById(variables, db = UrqlClient) {
  const query = `
    query getMediaById ($id: Int, $sort: [CharacterSort], $page: Int, $perPage: Int) {
      Media (id: $id) {
        id
        characters (sort: $sort, page: $page, perPage: $perPage) {
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
  `;

  const result = await db.query(query, variables).toPromise();

  return result.data;
};

export default {
  getPaginatedMedia,
  getMediaById
};